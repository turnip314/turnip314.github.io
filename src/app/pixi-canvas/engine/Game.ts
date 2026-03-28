import { Hues } from "./scenes/Hues";
import { Scene } from "./Scene";
import { HuesMenu } from "./scenes/HuesMenu";
import { GameService } from "./game.service";

export class Game {
    private currentScene: Scene | undefined;

    constructor(private app: any, private PIXI: any, private gameService: GameService) { }

    start() {
        this.app.stage.eventMode = 'static';
        this.app.stage.hitArea = new this.PIXI.Rectangle(
            0,
            0,
            this.app.screen.width,
            this.app.screen.height
        );

        this.app.stage.on('pointerdown', (event: { global: { x: number; y: number; }; }) => {
            this.currentScene?.onGeneralClick(event.global.x, event.global.y);
        });

        this.currentScene = new HuesMenu(this.app, this.PIXI, this, this.gameService);
        this.app.ticker.add((ticker: any) => {
            this.update(ticker.deltaTime);
        });
    }

    update(delta: number) {
        this.currentScene?.update(delta);
    }

    changeScene(scene: Scene) {
        this.currentScene?.destroy();
        this.currentScene = scene;
    }
}