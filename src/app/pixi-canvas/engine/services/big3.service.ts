import { Injectable } from "@angular/core";
import { SupabaseService } from "../../../shared/services/supabase.service";
import { CardsService } from "./cards.service";
import { shuffle } from "../../../shared/functions";

const NUM_RANKS = 13;
const NUM_SUITS = 4;
const NUM_PLAYERS = 4;

@Injectable({
    providedIn: 'root'
})
export class Big3Service extends CardsService {
    private gameState: GameState | null = null;
    // Keeps track of all cards played by each player.
    private playerNumber = 0;
    private gameStates: GameState[] = [];
    private universalState: UniversalState | undefined;

    constructor(protected supabaseService: SupabaseService) {
        super(supabaseService);
    }

    getEvaluationData(): void {
        if (GameState.evaluationData) return;

        // Load evaluation data from file (this is a large file, so we load it on demand rather than at startup)
        fetch('assets/data/big3.json')
            .then(response => response.json())
            .then(data => {
                GameState.loadEvaluationData(data);
            })
            .catch(error => {
                console.error('Error loading evaluation data:', error);
            });
    }

    createNewGame(deckMultiplier: number = 1): GameState {
        let deck: Card[] = [];
        for (let i = 0; i < NUM_RANKS; i++) {
            for (let j = 0; j < NUM_SUITS*deckMultiplier; j++) {
                deck.push(new Card(i, j));
            }
        }
        deck = shuffle(deck);
        const hands: Card[][] = [[], [], [], []];
        for (let i = 0; i < deck.length; i++) {
            hands[i % NUM_PLAYERS].push(deck[i]);
        }
        deck.sort((a, b) => a.rank - b.rank || a.suit - b.suit);

        const universalState: UniversalState = new UniversalState(deck);
        for (let i = 0; i < NUM_PLAYERS; i++) {
            const gameState = new GameState(universalState, i, hands[i])
            this.gameStates.push(gameState)
        }
        return this.gameStates[this.playerNumber];
    }

    getEvaluationKey(game: GameState): string {
        const evaluation = game.toEvaluationFormat();
        return (new Evaluator()).formatEvaluationDataToKey(evaluation);
    }

    simulateGame(deckMultiplier: number) {
        let deck: Card[] = [];
        for (let i = 0; i < NUM_RANKS; i++) {
            for (let j = 0; j < NUM_SUITS*deckMultiplier; j++) {
                deck.push(new Card(i, j));
            }
        }
        deck = shuffle(deck);
        const hands: Card[][] = [[], [], [], []];
        for (let i = 0; i < deck.length; i++) {
            hands[i % NUM_PLAYERS].push(deck[i]);
        }
        deck.sort((a, b) => a.rank - b.rank || a.suit - b.suit);

        this.universalState = new UniversalState(deck);

        const gameStates: GameState[] = [];
        for (let i = 0; i < NUM_PLAYERS; i++) {
            const gameState = new GameState(this.universalState, i, hands[i])
            gameStates.push(gameState)
        }
    }
}

class UniversalState {
    constructor(
        public deck: Card[],
        public deckMultiplier: number = 1,
        public lastPlay: Card[] | null = null,
        public turn: number = 0,
        public playedCards: Card[][] = [[], [], [], []],
        public playersInRound: number[] = [0, 1, 2, 3],
    ) {

    }

    copy(): UniversalState {
        return new UniversalState(
            this.deck,
            this.deckMultiplier,
            this.lastPlay,
            this.turn,
            [[...this.playedCards[0]], [...this.playedCards[1]], [...this.playedCards[2]], [...this.playedCards[3]]],
            [...this.playersInRound]
        )
    }

    isPlayerInGame(playerNumber: number): boolean {
        return this.playedCards[playerNumber].length < NUM_RANKS * this.deckMultiplier;
    }

    isPlayerInRound(playerNumber: number): boolean {
        return this.playersInRound.includes(playerNumber);
    }

    // Number of players that haven't reached 0 cards
    getNumberOfPlayersLeftInGame(): number {
        return this.playedCards.filter(cards => cards.length < NUM_RANKS * this.deckMultiplier).length;
    }

    getNumberOfPlayersLeftInRound(): number {
        return this.playersInRound.length;
    }

    playCards(playerNumber: number, cards: Card[]) {
        this.lastPlay = cards;
        this.playedCards[playerNumber].push(...cards);
        this.getNextTurn();
    }

    pass(playerNumber: number) {
        this.playersInRound = this.playersInRound.filter(p => p != playerNumber);
        if (this.playersInRound.length == 1) {
            this.lastPlay = null;
            this.playersInRound = [];
            for (let i = 0; i < NUM_PLAYERS; i++) {
                if (this.isPlayerInGame(i)) this.playersInRound.push(i);
            }
        }
        this.getNextTurn();
    }

    getNextTurn() {
        this.turn = (this.turn + 1)%NUM_PLAYERS;
        while (!this.isPlayerInGame(this.turn)) this.turn = (this.turn + 1)%NUM_PLAYERS;
    }
}

export class GameState {
    static evaluationData: Evaluator | undefined; // This will hold precomputed evaluation data for game states, loaded from a file.
    static cachedDistances: Map<string, number> = new Map(); // Cache for distances to winning states.

    possibleNextPlayerStates: GameState[] | undefined;
    validNextPlayerStates: GameState[] | undefined;
    possibleNextPlayerMoves: Card[][] | undefined;
    validNextPlayerMoves: Card[][] | undefined;

    constructor(
        public readonly universalState: UniversalState,
        public readonly playerNumber: number,
        private hand: Card[]
    ) {
        // sort hand by rank, then suit
        this.hand.sort((a, b) => a.rank - b.rank || a.suit - b.suit);
    }

    isWinningState(): boolean {
        return this.hand.length === 0;
    }

    getHandString(): string {
        return this.hand.map(c => `${c.toString()}`).join(', ');
    }

    getAllOpponentUnplayedCards(): Card[] {
        return this.universalState.deck.filter(
            card => !this.universalState.playedCards.flat().includes(card) && !this.hand.includes(card)
        );
    }

    getAllHandSizes(): number[] {
        return this.universalState.playedCards.map(cards => NUM_RANKS - cards.length);
    }

    opponentPlays(cards: Card[]) {
        this.validNextPlayerMoves = undefined;
        this.validNextPlayerStates = undefined;
    }

    playCards(cards: Card[]) {
        this.hand = this.hand.filter(card => !cards.includes(card));
        this.possibleNextPlayerStates = undefined; // Reset possible states since the game state has changed.
        this.possibleNextPlayerMoves = undefined; // Reset possible moves since the last play has changed.
    }

    getAllValidMoves(): Card[][] {
        if (this.validNextPlayerMoves) return this.validNextPlayerMoves;
        const possibleMoves = this.getAllPossibleMoves();
        // If it's the first turn of the round, any move is valid.
        if (!this.universalState.lastPlay) return possibleMoves;
        const lastPlay = this.universalState.lastPlay!!;

        return possibleMoves.filter(move => {
            if (move.length !== lastPlay.length) return false; // Must play the same number of cards as the last play.
            const moveRank = move[0].rank;
            const lastPlayRank = lastPlay[0].rank;
            if (moveRank <= lastPlayRank) return false; // Must play a higher rank than the last play.

            // Move must be of the same type (straight, pair, etc) as the last play.
            // We assume the cards of the move are sorted, so just check first and last card.
            const moveType = move[move.length - 1].rank - move[0].rank;
            const lastPlayType = lastPlay[lastPlay.length - 1].rank - lastPlay[0].rank;
            return moveType === lastPlayType;
        })
    }

    getAllPossibleMoves(): Card[][] {
        if (this.possibleNextPlayerMoves) return this.possibleNextPlayerMoves;
        let possibleMoves: Card[][] = [];

        // Get singles, pairs, triples, and quads, ...
        for (let rank = 0; rank < NUM_RANKS; rank++) {
            const cardsOfRank = this.hand.filter(card => card.rank === rank);
            let acc: Card[] = [];
            for (let i = 0; i < cardsOfRank.length; i++) {
                acc.push(cardsOfRank[i]);
                possibleMoves.push([...acc]);
            }
        }

        // Get straights
        for (let size = 1; size <= NUM_SUITS * this.universalState.deckMultiplier; size++) {
            for (let i = 0; i < this.hand.length; i++) {
                let acc: Card[] = [];
                let count = 0;
                if (this.hand[i].rank > 8) continue; // Double straights can't start with a card higher than 8 (since they need 6 cards).
                for (let j = i; j < this.hand.length - 1; j++) {
                    // Double straights can't exceed an Ace (10).
                    if (this.hand[j].rank > 10) break;
                    if (acc.length === 0 || count === 0 && this.hand[j].rank === acc[acc.length - 1].rank + 1) {
                        acc.push(this.hand[j]);
                        count++;
                    } else if (count != 0 && this.hand[j].rank === acc[acc.length - 1].rank) {
                        count++;
                        acc.push(this.hand[j]);
                        count = count % size; // Reset count after every size cards of the same rank.
                    }
                    if (acc.length >= 3 * size && count === 0) {
                        possibleMoves.push([...acc]);
                    }
                }
            }
        }

        this.possibleNextPlayerMoves = possibleMoves;
        return possibleMoves;
    }

    // Generates all possible next states
    getNextValidStates(): GameState[] {
        if (this.validNextPlayerStates != undefined) return this.validNextPlayerStates;
        this.validNextPlayerStates = [];
        const moves = this.getAllValidMoves();
        for (const move of moves) {
            const newState = new GameState(
                new UniversalState(
                    this.universalState.deck,
                    this.universalState.deckMultiplier,
                    this.universalState.lastPlay,
                    (this.universalState.turn + 1)%NUM_PLAYERS,
                    this.universalState.playedCards.map((cards, index) => index === this.playerNumber ? [...cards, ...move] : cards)
                ),
                this.playerNumber,
                this.hand.filter(c => !move.includes(c)),
            );
            this.validNextPlayerStates.push(newState);
        }
        return this.validNextPlayerStates;
    }

    // Generates all possible next states
    getNextPossibleStates(): GameState[] {
        if (this.possibleNextPlayerStates != undefined) return this.possibleNextPlayerStates;
        this.possibleNextPlayerStates = [];
        const moves = this.getAllPossibleMoves();
        for (const move of moves) {
            const newState = new GameState(this.universalState.copy(), this.playerNumber, this.hand.filter(c => !move.includes(c)));
            newState.universalState.playedCards = this.universalState.playedCards.map((cards, index) => index === this.playerNumber ? [...cards, ...move] : cards);
            this.possibleNextPlayerStates.push(newState);
        }
        return this.possibleNextPlayerStates;
    }

    isPartOfPairOrStraight(card: Card): boolean {
        for (const move of this.getAllPossibleMoves()) {
            if (move.length >= 2 && move.some(c => c === card)) {
                return true;
            }
        }
        return false;
    }

    getShortestDistanceToWinning(): number {
        if (GameState.cachedDistances.has(this.getHandString())) {
            return GameState.cachedDistances.get(this.getHandString())!;
        }
        if (this.isWinningState()) return 0;
        const states = this.getNextPossibleStates();
        if (states.length === 0) throw new Error("No possible moves from a non-winning state, something is wrong.");
        // sort states by number of cards in hand, ascending 
        // (this is a heuristic to speed up the search for the shortest path to winning)
        states.sort((a, b) => a.hand.length - b.hand.length);
        const distance = 1 + Math.min(...states.map(s => s.getShortestDistanceToWinning()));
        GameState.cachedDistances.set(this.getHandString(), distance);
        return distance;
    }

    // A static loader for evaluation data
    static loadEvaluationData(data: any): void {
        GameState.evaluationData = new Evaluator(data);
    }

    toEvaluationFormat(): EvaluationData {
        // Convert the game state to a format that can be used for lookups in the evaluation data.
        return new EvaluationData(
            this.universalState.getNumberOfPlayersLeftInGame(),
            this.hand.length, // Cards in player's hand
            this.getShortestDistanceToWinning(),
            this.hand.reduce((sum, card) => sum + card.rank, 0) / this.hand.length || 0, // Average of card ranks in hand
            (312 * this.universalState.deckMultiplier - this.universalState.playedCards.flat(1).reduce((sum, card) => sum + card.rank, 0)) / (52 * this.universalState.deckMultiplier - this.universalState.playedCards.flat().length || 1), // Average of card ranks of all unplayed cards
            52 * this.universalState.deckMultiplier - this.universalState.playedCards.flat(1).length, // Number of cards left unplayed
            Math.min(...this.universalState.playedCards.filter((_, index) => index !== this.playerNumber).map(cards => NUM_RANKS * this.universalState.deckMultiplier - cards.length)), // Minimum number of cards left among opponents
            this.hand.filter(card => card.rank >= 10).length
        );
    }
}

class EvaluationData {
    constructor(
        public playersLeft: number,
        public playerCardsLeft: number,
        public shortestDistanceToWinning: number,
        public averageHandValue: number,
        public averageTotalValue: number,
        public numCardsLeft: number,
        public leadingOpponentCardsLeft: number,
        public numLargeCards: number
    ) { }
}

// Data for evaluating a game state on the turn after a player move
// (We don't care about other turns since the player has no control over them)
class Evaluator {
    private trackedMoves: {
        evaluationData: EvaluationData, move: Card[], playerStarted: boolean
    }[] = [];

    constructor(private preloadedData?: any) {
    }

    getQuantileBin(value: number, numberOfCards: number): number {
        // Gives a value from 0 to 6 representing which quantile the value falls into for game states with the given number of cards.
        const thresholds = computeThresholds(numberOfCards);
        for (let i = 0; i < 6; i++) {
            if (value < thresholds[i]) {
                return i;
            }
        }
        return 6;
    }

    formatEvaluationDataToKey(evaluationData: EvaluationData): string {
        // Convert evaluation data to a string key for lookups in the evaluation data.
        // Store distance as is. Store average hand value, average total value, and number of singles via a normalized distribution range.
        const distanceBin = evaluationData.shortestDistanceToWinning; // distance to winning can be used directly as a key since it's a small integer
        const averageHandValueBin = this.getQuantileBin(evaluationData.averageHandValue, evaluationData.playerCardsLeft); // bin average hand value into quantiles based on number of cards left in hand
        const averageTotalValueBin = this.getQuantileBin(evaluationData.averageTotalValue, evaluationData.numCardsLeft); // bin average total value into quantiles based on number of cards left unplayed
        const leadingOpponentCardsLeftBin = Math.floor((evaluationData.leadingOpponentCardsLeft+1)/2); // number of leading opponent cards left is divided by 2 to reduce space
        const largeCardsBin = evaluationData.numLargeCards;
        return `${distanceBin}-${averageHandValueBin}-${averageTotalValueBin}-${leadingOpponentCardsLeftBin}-${largeCardsBin}`;
    }

    getProbabilityOfWinning(evaluationData: EvaluationData, playerGoesFirst: boolean): number {
        const key = this.formatEvaluationDataToKey(evaluationData);
        const playersLeft = evaluationData.playersLeft;
        if (this.preloadedData[playersLeft.toString()][playerGoesFirst.toString()][key]) {
            return this.preloadedData[playersLeft.toString()][playerGoesFirst.toString()][key];
        } else {
            // Placeholder heuristic: Probability of winning increases with average hand value and opponent cards left and decreases with distance to winning.
            const averageHandValueBin = this.getQuantileBin(evaluationData.averageHandValue, evaluationData.playerCardsLeft);
            const distance = evaluationData.shortestDistanceToWinning;
            const leadingOpponentCardsLeft = Math.floor((evaluationData.leadingOpponentCardsLeft+1)/2);
            const largeCardsBin = evaluationData.numLargeCards;
            const heuristic = Math.min(
                Math.max(
                    ((playerGoesFirst ? 1 : 0) * 3 + averageHandValueBin  + largeCardsBin + leadingOpponentCardsLeft - distance) / (4 * playersLeft),
                    0.1
                ),
                0.9
            );
            this.preloadedData[playersLeft][playerGoesFirst ? 1 : 0][key] = heuristic;
            return heuristic;
        }
    }

    getProbabilityMoveWinsRound(state: GameState, move: Card[]): number {
        // Probability that a move cannot be beaten by opponents. Does not factor in passing or opponent psychology.
        // This is a general heuristic only. It is not a rigorous computation.
        const numOpps = state.universalState.getNumberOfPlayersLeftInRound() - 1;
        if (numOpps <= 0) return 1;
        const unplayedCards = state.getAllOpponentUnplayedCards();
        const size = move.length;
        const rank = move[0].rank;
        if (size === 1 && unplayedCards.some(card => card.rank > rank)) return 0;
        if (move[move.length - 1].rank == 12) return 1;

        let numCombinationsLarger = 0;
        if (move[0].rank == move[move.length - 1].rank) {
            // Not a straight
            for (let i = rank + 1; i < 13; i++) {
                const numUnplayedOfRank = unplayedCards.filter(card => card.rank == i).length;
                numCombinationsLarger += choose(numUnplayedOfRank, size);
            }
        } else {
            // Max straight
            if (move[move.length - 1].rank == 10) return 1;
            // Count number of possible straights
            const numOfEachRank: Map<number, number> = new Map();
            for (let i = rank + 1; i <= 10; i++) {
                const numUnplayedOfRank = unplayedCards.filter(card => card.rank == i).length;
                numOfEachRank.set(i, numUnplayedOfRank);
            }
            for (let i = rank + 1; i <= 11 - size; i++) {
                let acc = 1;
                for (let j = i; j < i + size; j++) {
                    acc *= numOfEachRank.get(j)!!;
                }
                numCombinationsLarger += acc;
            }
        }
        return (1 - (1 / numOpps) ** size) ** (numOpps * numCombinationsLarger);
    }

    getBestMove(state: GameState): Card[] {
        // For each move, compute probability of winning round * probability of winning game from state on player turn
        // Add probability of losing round * probability of winning game from state on opponent turn
        const moves = state.getAllValidMoves();
        const states = state.getNextValidStates();
        if (moves.length != states.length) throw Error("Moves does not match states. Something wrong occurred.");
        let bestMove: Card[] = [];
        let bestEval: number = -1;
        for (let i = 0; i < moves.length; i++) {
            const evalFormat = states[i].toEvaluationFormat();
            const probWinRound = this.getProbabilityMoveWinsRound(state, moves[i])
            const curEval = probWinRound * this.getProbabilityOfWinning(evalFormat, true) + (1 - probWinRound) * this.getProbabilityOfWinning(evalFormat, false);
            if (curEval > bestEval) {
                bestMove = moves[i];
                bestEval = curEval;
            }
        }
        return bestMove;
    }

    trackMove(state: GameState, move: Card[], playerStarted: boolean): void {
        // Store that a move was played in the given state to update probabilities once game is complete.
        const evaluationFormat = state.toEvaluationFormat();

        this.trackedMoves.push({ evaluationData: evaluationFormat, move, playerStarted });
    }

    updateProbabilities(playerStanding: number): void {
        // Update probabilities based on game history and whether the player won or not.
    }
}

class Card {
    constructor(public readonly rank: number, public readonly suit: number){}

    toString(): string {
        return `${this.rank}-${this.suit}`
    }
}

function choose(n: number, k: number): number {
    if (n <= k) return 1;
    let val = 1;
    for (let i = n; i > n - k; i--) val *= i;
    for (let i = 2; i <= k; i++) val /= i;
    return val;
}

/**
 * Approximation of inverse standard normal CDF (Acklam's method)
 */
function normalInv(p: number): number {
    if (p <= 0 || p >= 1) {
        throw new Error("p must be in (0,1)");
    }

    const a = [
        -3.969683028665376e+01,
        2.209460984245205e+02,
        -2.759285104469687e+02,
        1.383577518672690e+02,
        -3.066479806614716e+01,
        2.506628277459239e+00
    ];

    const b = [
        -5.447609879822406e+01,
        1.615858368580409e+02,
        -1.556989798598866e+02,
        6.680131188771972e+01,
        -1.328068155288572e+01
    ];

    const c = [
        -7.784894002430293e-03,
        -3.223964580411365e-01,
        -2.400758277161838e+00,
        -2.549732539343734e+00,
        4.374664141464968e+00,
        2.938163982698783e+00
    ];

    const d = [
        7.784695709041462e-03,
        3.224671290700398e-01,
        2.445134137142996e+00,
        3.754408661907416e+00
    ];

    const plow = 0.02425;
    const phigh = 1 - plow;

    let q: number, r: number;

    if (p < plow) {
        q = Math.sqrt(-2 * Math.log(p));
        return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
            ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    }

    if (p > phigh) {
        q = Math.sqrt(-2 * Math.log(1 - p));
        return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
            ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    }

    q = p - 0.5;
    r = q * q;
    return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
        (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
}

/**
 * Compute thresholds for N cards
 */
function computeThresholds(N: number): number[] {
    const sigma = Math.sqrt(14 / N);
    const thresholds: number[] = [];

    for (let i = 1; i < 7; i++) {
        const p = i / 7;
        const z = normalInv(p);
        thresholds.push(6 + z * sigma);
    }

    return thresholds;
}