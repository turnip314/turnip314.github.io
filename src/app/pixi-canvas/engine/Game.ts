import { Hues } from "./scenes/Hues";
import { Scene } from "./Scene";
import { HuesMenu } from "./scenes/HuesMenu";
import { GameService } from "./services/game.service";
import { HuesService } from "./services/hues.service";
import { TwentyFour } from "./scenes/TwentyFour";
import { Big3 } from "./scenes/Big3";
import { Big3Service } from "./services/big3.service";

export class Game {
    private currentScene: Scene | undefined;

    constructor(private app: any, private world: any, private PIXI: any, private gameService: GameService) { }

    start(game: string) {
        this.world.eventMode = 'static';
        this.world.hitArea = new this.PIXI.Rectangle(
            0,
            0,
            this.world.width,
            this.world.height
        );

        this.world.on('pointerdown', (event: { global: { x: number; y: number; }; }) => {
            this.currentScene?.onGeneralClick(event.global.x, event.global.y);
        });
        this.app.ticker.add((ticker: any) => {
            this.update(ticker.deltaTime);
        });

        console.log(game)
        switch (game) {
            case "hues": {
                console.log(123)
                this.currentScene = new HuesMenu(this.world, this.PIXI, this, this.gameService.toChildService(HuesService) as HuesService);
            } break;
            case "24": {
                console.log(234)
                this.currentScene = new TwentyFour(this.world, this.PIXI, this);
            } break;
            case "big3": {
                this.currentScene = new Big3(this.world, this.PIXI, this, this.gameService.toChildService(Big3Service) as Big3Service);
            }
            default: return;
        }
    }

    update(delta: number) {
        this.currentScene?.update(delta);
    }

    changeScene(scene: Scene) {
        this.currentScene?.destroy();
        this.currentScene = scene;
    }
}