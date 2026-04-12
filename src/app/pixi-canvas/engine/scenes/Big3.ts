import { Game } from "../Game";
import { Scene } from "../Scene";
import { Big3Service, GameState } from "../services/big3.service";

export class Big3 extends Scene {
    private gameState: GameState | undefined;
    constructor(world: any, PIXI: any, game: Game, private big3Service: Big3Service) {
        super(world, PIXI, game);

        console.log("Initializing Big3 scene");
        this.gameState = this.big3Service.createNewGame();
        console.log(this.gameState)
        console.log(this.gameState.getHandString());
        console.log(this.gameState.toEvaluationFormat());
        console.log(this.big3Service.getEvaluationKey(this.gameState));
    }

    update(delta: number) {

    }
}
