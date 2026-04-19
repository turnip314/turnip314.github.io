import { GameService } from "../services/game.service";
import { Game } from "../Game";
import { Scene } from "../Scene";
import { MenuButton } from "../entities/MenuButton";
import { TextField } from "../entities/TextField";
import { Hues } from "./Hues";
import { HuesService } from "../services/hues.service";

export class HuesMenu extends Scene {
    private hostButton: MenuButton | undefined;
    private joinButton: MenuButton | undefined;
    private startButton: MenuButton | undefined;
    private nameTextField: TextField | undefined;
    private codeTextField: TextField | undefined;
    private gameIntention: string = "";

    constructor(world: any, PIXI: any, game: Game, private gameService: HuesService) {
        super(world, PIXI, game);
        this.hostButton = new MenuButton(world, PIXI, 550, 100, 200, 60, 'Host', () => this.host())
        this.joinButton = new MenuButton(world, PIXI, 550, 200, 200, 60, 'Join', () => this.join())
    }

    join() {
        this.gameIntention = "join";
        this.codeTextField?.destroy();
        this.nameTextField?.destroy();
        this.startButton?.destroy();
        this.codeTextField = new TextField(this.world, this.PIXI, 550, 300, 200, 60, "Join Code");
        this.nameTextField = new TextField(this.world, this.PIXI, 550, 400, 200, 60, "Nickname");
        this.startButton = new MenuButton(this.world, this.PIXI, 550, 500, 200, 60, 'Start', () => this.start())
    }

    host() {
        this.gameIntention = "host";
        this.codeTextField?.destroy();
        this.nameTextField?.destroy();
        this.startButton?.destroy();
        this.codeTextField = undefined;
        this.nameTextField = new TextField(this.world, this.PIXI, 550, 300, 200, 60, "Nickname");
        this.startButton = new MenuButton(this.world, this.PIXI, 550, 400, 200, 60, 'Start', () => this.start())
    }

    async start() {
        const nickname = this.nameTextField?.getText() ?? "";
        if (nickname.length < 3) return;
        const code = this.codeTextField?.getText() ?? "";
        if (code.length < 3 && this.gameIntention == "join") return;

        if (this.gameIntention == "host") {
            const result = await this.gameService.createGame(nickname);
            await this.gameService.initializeGameState(result.code);

            let huesScene = new Hues(this.world, this.PIXI, nickname, result.code, this.game, this.gameService, true);
            this.game.changeScene(huesScene);

        } else if (this.gameIntention == "join") {
            const result = await this.gameService.getGame(code, nickname)
            if (result.metadata == "started") {
                return;
            }
            let huesScene = new Hues(this.world, this.PIXI, nickname, code, this.game, this.gameService);
            this.game.changeScene(huesScene);
        }
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
