import { Big3Card } from "../entities/cards/Big3Card";
import { Card } from "../entities/cards/Card";
import { Big3Hand } from "../entities/cards/Big3Hand";
import { Game } from "../Game";
import { Scene } from "../Scene";
import { Big3Service, GameState } from "../services/big3.service";
import { MenuButton } from "../entities/MenuButton";

export class Big3 extends Scene {
    private gameState: GameState | undefined;
    private hand: Big3Hand | undefined;
    private playButton: MenuButton | undefined;
    private passButton: MenuButton | undefined;
    private lastPlayed: Big3Card[] = [];
    private justPlayed: Big3Card[] = [];
    constructor(world: any, PIXI: any, game: Game, private big3Service: Big3Service) {
        super(world, PIXI, game);

        console.log("Initializing Big3 scene");
        this.gameState = this.big3Service.createNewGame();
        console.log(this.gameState)
        console.log(this.gameState.getHandString());
        console.log(this.gameState.toEvaluationFormat());
        console.log(this.big3Service.getEvaluationKey(this.gameState));

        const cards: Card[] = [];

        this.hand = new Big3Hand(world, PIXI, this.gameState.getHand(), () => this.toggleSelect());

        this.playButton = new MenuButton(
            world, PIXI, 530, 500, 100, 50, "Play", () => this.play()
        );
        this.passButton = new MenuButton(
            world, PIXI, 650, 500, 100, 50, "Pass", () => this.pass()
        )
    }

    toggleSelect() {

    }

    play() {
        if (this.gameState?.playerNumber != this.gameState?.universalState.turn) return;
        const validMoves = this.gameState?.getAllValidMoves() || [];
        const selectedCards = this.hand?.getSelectedCards() || [];
        const isValid = validMoves.some(
            move => {
                if (move.length != selectedCards?.length) return false;
                for (let j = 0; j < move.length; j++) {
                    if (move[j].rank != selectedCards[j].rank) return false;
                }
                return true;
            }
        )
        if (isValid) {
            this.justPlayed.forEach(card => {
                card.changePosition(
                    undefined, 300, undefined
                )
            });
            this.lastPlayed.forEach(card => card.destroy());
            this.lastPlayed = [...this.justPlayed];
            this.justPlayed = [];

            this.gameState?.playCards(selectedCards);
            const playedCards = this.hand?.playCards(selectedCards)!!;
            const middle = playedCards.length / 2.0;
            for (let i = 0; i < playedCards.length; i++) {
                const card = playedCards[i];
                this.justPlayed.push(card);
                card.changePosition(610+(i-middle) * 40+1, 350, i+1)
            }
            this.waitForOpponentTurn();
        }
    }

    pass () {
        if (this.gameState?.playerNumber != this.gameState?.universalState.turn) return;
        this.gameState?.pass();
        this.waitForOpponentTurn();
    }

    async waitForOpponentTurn() {

    }

    update(delta: number) {

    }
}
