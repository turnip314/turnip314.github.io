import { Game } from "../Game";
import { Scene } from "../Scene";


export class MainMenu extends Scene {
  private player: any;

  constructor(app: any, PIXI: any, game: Game) {
    super(app, PIXI, game);

    this.player = new this.PIXI.Graphics();
    this.player.beginFill(0xff0000);
    this.player.drawRect(0, 0, 50, 50);
    this.player.endFill();

    this.app.stage.addChild(this.player);
  }

  update(delta: number) {
    this.player.x += 2 * delta;
  }

  destroy(): void {
    
  }
}