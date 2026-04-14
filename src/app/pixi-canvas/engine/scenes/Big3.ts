import { Big3Card } from "../entities/cards/Big3Card";
import { Card } from "../entities/cards/Card";
import { Big3Hand } from "../entities/cards/Big3Hand";
import { Game } from "../Game";
import { Scene } from "../Scene";
import { Big3Service, GameState } from "../services/big3.service";
import { MenuButton } from "../entities/MenuButton";
import { Colours } from "../data/Colours";

export class Big3 extends Scene {
    private gameState: GameState | undefined;
    private hand: Big3Hand | undefined;
    private opponentHands: any[] = [];
    private opponentCards: Big3Card[] = [];
    private playButton: MenuButton | undefined;
    private passButton: MenuButton | undefined;
    private lastPlayed: Big3Card[] = [];
    private justPlayed: Big3Card[] = [];
    private indicators: any[] = [];
    private readonly locations = [[560, 570, 220, 20], [200, 250, 20, 220], [560, 100, 200, 20], [1100, 250, 20, 220]];
    constructor(world: any, PIXI: any, game: Game, private big3Service: Big3Service) {
        super(world, PIXI, game);

        this.big3Service.loadEvaluator();

        console.log("Initializing Big3 scene");
        this.gameState = this.big3Service.createNewGame();
        console.log(this.gameState)
        console.log(this.gameState.getHandString());
        console.log(this.gameState.toEvaluationFormat());
        console.log(this.big3Service.getEvaluationKey(this.gameState));

        this.hand = new Big3Hand(world, PIXI, this.gameState.getHand(), () => this.toggleSelect());

        // Draw opponent cards before they are revealed to save time later
        this.big3Service.getOpponentCards().forEach(card =>
            this.opponentCards.push(
                new Big3Card(
                    world, PIXI, card
                )
            )
        );
        this.opponentCards.forEach(card => card.hide());


        this.playButton = new MenuButton(
            world, PIXI, 560, 500, 100, 50, "Play", () => this.play()
        );
        this.passButton = new MenuButton(
            world, PIXI, 680, 500, 100, 50, "Pass", () => this.pass()
        )

        for (let i = 0; i < 4; i++) {
            const dot = new this.PIXI.Graphics()
                .rect(this.locations[i][0], this.locations[i][1], this.locations[i][2], this.locations[i][3])
                .fill(Colours.Yellow)

            this.world.addChild(dot);
            this.indicators.push(dot);
        }
        this.updateDotColours();
    }

    toggleSelect() {
        if (this.gameState?.playerNumber != this.gameState?.universalState.turn) {

        }
    }

    play() {
        const selectedCards = this.hand?.getSelectedCards() || [];
        const isValid = this.big3Service.playCards(selectedCards);
        if (isValid) {
            this.pushPlayedCards();
            console.log(selectedCards)

            const playedCards = this.hand?.playCards(selectedCards)!!;
            const middle = playedCards.length / 2.0;
            for (let i = 0; i < playedCards.length; i++) {
                const card = playedCards[i];
                this.justPlayed.push(card);
                card.changePosition(650 + (i - middle) * 40 + 1, 350, i + 1)
            }
            this.updateDotColours();
            this.waitForOpponentTurn();
        }
    }

    pass() {
        const isValid = this.big3Service.pass();
        if (!isValid) return;
        console.log(null)
        this.updateDotColours();
        this.waitForOpponentTurn();
    }

    updateDotColours() {
        for (let i = 0; i < 4; i++) {
            let colour = Colours.Yellow;
            if (!this.big3Service.getPlayersInRound().includes(i)) colour = Colours.Red;
            if (this.big3Service.getCurrentTurn() == i) colour = Colours.Green;
            this.indicators[i]
                .rect(this.locations[i][0], this.locations[i][1], this.locations[i][2], this.locations[i][3])
                .fill(colour)
        }
    }

    async waitForOpponentTurn() {
        await new Promise(f => setTimeout(f, 2000));
        const turn = this.gameState?.universalState.turn!!;
        this.indicators[turn].rect(
            this.locations[turn][0],
            this.locations[turn][1],
            this.locations[turn][2],
            this.locations[turn][3]
        ).fill(Colours.Green);
        if (turn === this.gameState?.playerNumber) return;

        const move = this.big3Service.opponentMakesNextMove();
        console.log(move);
        if (move) {
            this.pushPlayedCards();
            const playedCards = move.map(
                cardData => this.opponentCards.find(card => card.card === cardData)!
            );

            const middle = playedCards.length / 2.0;
            for (let i = 0; i < playedCards.length; i++) {
                const card = playedCards[i];
                this.justPlayed.push(card);
                card.show();
                card.changePosition(650 + (i - middle) * 40 + 1, 350, i + 1);
            }
        }

        this.updateDotColours();

        this.waitForOpponentTurn();
    }

    pushPlayedCards() {
        this.justPlayed.forEach(card => {
            card.changePosition(
                undefined, 200, undefined
            )
        });
        this.lastPlayed.forEach(card => card.destroy());
        this.lastPlayed = [...this.justPlayed];
        this.justPlayed = [];
    }

    update(delta: number) {

    }
}
