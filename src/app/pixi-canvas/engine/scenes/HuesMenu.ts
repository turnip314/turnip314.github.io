import { Game } from "../Game";
import { Scene } from "../Scene";
import { MenuButton } from "../entities/MenuButton";
import { TextField } from "../entities/TextField";
import { Hues } from "./Hues";

export class HuesMenu extends Scene {
    private hostButton: MenuButton | undefined;
    private joinButton: MenuButton | undefined;
    private startButton: MenuButton | undefined;
    private nameTextField: TextField | undefined;
    private codeTextField: TextField | undefined;
    private gameIntention: string = "";

    constructor(app: any, PIXI: any, game: Game) {
        super(app, PIXI, game);
        this.hostButton = new MenuButton(app, PIXI, 550, 200, 200, 70, 'Host', () => this.host())
        this.joinButton = new MenuButton(app, PIXI, 550, 300, 200, 70, 'Join', () => this.join())
    }

    join() {
        this.gameIntention = "join";
        this.codeTextField?.destroy();
        this.nameTextField?.destroy();
        this.startButton?.destroy();
        this.codeTextField = new TextField(this.app, this.PIXI, 550, 400, 200, 70, "Join Code");
        this.nameTextField = new TextField(this.app, this.PIXI, 550, 500, 200, 70, "Nickname");
        this.startButton = new MenuButton(this.app, this.PIXI, 550, 600, 200, 70, 'Start', () => this.start())
    }

    host() {
        this.gameIntention = "host";
        this.codeTextField?.destroy();
        this.nameTextField?.destroy();
        this.startButton?.destroy();
        this.nameTextField = new TextField(this.app, this.PIXI, 550, 400, 200, 70, "Nickname");
        this.startButton = new MenuButton(this.app, this.PIXI, 550, 500, 200, 70, 'Start', () => this.start())
    }

    start() {
        let huesScene = new Hues(this.app, this.PIXI, this.nameTextField?.getText() ?? "", this.codeTextField?.getText() ?? "", this.game);
        this.game.changeScene(huesScene);
    }

    update(delta: number) {
        this.nameTextField?.update(delta);
        this.codeTextField?.update(delta);
    }

    destroy(): void {
        this.hostButton?.destroy();
        this.joinButton?.destroy();
        this.nameTextField?.destroy();
        this.codeTextField?.destroy();
        this.startButton?.destroy();
    }
    
    onGeneralClick(x: number, y: number): void {
        this.nameTextField?.unselect();
        this.codeTextField?.unselect();
    }
}
