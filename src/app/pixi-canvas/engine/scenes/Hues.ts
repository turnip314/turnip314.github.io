import { GameService } from "../game.service";
import { Game } from "../Game";
import { Scene } from "../Scene";
import { Colours } from "../data/Colours"
import { ColourTile } from "../entities/ColourTile";
import { MenuButton } from "../entities/MenuButton";
import { ColourSelectionDialog } from "../entities/dialog/ColourSelectionDialog";

export class Hues extends Scene {
    private grid: ColourTile[][] = [];
    private readonly gridX = 30;
    private readonly gridY = 16;

    private host = false;

    private phase: number = 0;
    private code: string = "";
    private turnState: string = ""; // "clue, guess, reveal, ready"
    private selectedX: number = -1;
    private selectedY: number = -1;
    private clue: string = ""
    private guesses: any[] = [];
    private players: any[] = [];
    private playerDisplays: any[] = [];

    private colourSelectionDialog: ColourSelectionDialog | undefined;
    private guessButton: MenuButton | undefined;
    private readyButton: MenuButton | undefined;
    private startButton: MenuButton | undefined;
    private rightPanel: any;

    constructor(app: any, PIXI: any, name: string, code: string, game: Game, gameService: GameService, host = false) {
        super(app, PIXI, game, gameService);
        this.host = host;

        for (let i = 0; i < this.gridX; i++) {
            let row: Array<any> = [];
            for (let j = 0; j < this.gridY; j++) {
                row.push(new ColourTile(app, PIXI, Colours.colours[i][j], i, j, (x: number, y: number) => this.onColourTileClick(x, y)));
            }
            this.grid.push(row);
        }

        this.code = code;

        this.rightPanel = new this.PIXI.Graphics();
        this.rightPanel.beginFill(Colours.White);
        this.rightPanel.drawRect(
            1110,
            30,
            160,
            680
        );
        this.rightPanel.endFill();
        this.app.stage.addChild(this.rightPanel);

        this.turnState = "start";
        if (host) {
            this.startButton = new MenuButton(
                this.app, this.PIXI, 600, 660, 200, 40, "Start Game", () => this.onStartGame()
            )
        }
        this.pollForPlayers();
    }

    update(delta: number) {
        this.colourSelectionDialog?.update(delta);
    }

    onColourTileClick(x: number, y: number) {
        if (this.turnState == "guess") {
            this.selectedX = x;
            this.selectedY = y;
            this.onResetSelect();
            this.grid[x][y].select();
        }
    }

    onResetSelect() {
        this.grid.forEach(
            row => row.forEach(
                tile => tile.unselect()
            )
        )
    }

    onDisplayPlayers() {
        this.playerDisplays.forEach(
            display => display.destroy()
        );
        this.playerDisplays = [];

        const start = Math.min(...this.players.map(p => p.player_number))
        this.players.forEach(
            player => {
                const text = new this.PIXI.Text(player.username, { fontFamily: 'Arial', fontSize: 24, fill: Colours.Black, align: 'center' });
                text.x = 1120;
                text.y = 60 + 40 * (player.player_number - start);
                this.app.stage.addChild(text);
                this.playerDisplays.push(
                    text
                )
            }
        )
    }

    async onStartGame(): Promise<boolean> {
        await this.gameService.setGameMetadata(this.code, "started");
        this.startButton?.destroy();
        this.startButton = undefined;
        return true;
    }

    async onSubmitClue(x: number, y: number, clue: string): Promise<boolean> {
        /* Called after a clue is given */
        console.log(x, y, clue)
        let success = true;
        if (this.turnState == "clue") {
            this.selectedX = x;
            this.selectedY = y;
            this.clue = clue;
            this.colourSelectionDialog?.destroy();
            success = await this.gameService.submitClueAndResetPlayerStatus(
                this.code, x, y, clue, this.phase
            )
            if (!success) return false;

            if (this.phase == 1) {
                success = await this.getNextTurn();
                if (!success) return false;
            }

            // Note: phase is updated pre-emptively but should not be fetched until all players are ready
            success = await this.gameService.updateGamePhase(this.code, 1 - this.phase);
            this.pollForGuesses();
            this.selectedX = -1;
            this.selectedY = -1;
        } else {
            return false;
        }
        return success;
    }

    async onSubmitGuess(x: number, y: number): Promise<boolean> {
        let success = true;
        if (this.turnState == "guess") {
            console.log("submitting guess")
            success = await this.gameService.submitGuess(
                this.code, x, y, this.phase
            )
            if (!success) return false;

            console.log("polling for guesses")
            this.turnState = "";
            this.pollForGuesses();

            this.selectedX = -1;
            this.selectedY = -1;
            this.guessButton?.destroy();
            this.onResetSelect();

        } else {
            return false;
        }
        return success;
    }

    openColourSelectionDialog() {
        let colours: [number, number, string][] = []
        for (let i = 0; i < 4; i++) {
            let rx = Math.floor(Math.random() * this.gridX);
            let ry = Math.floor(Math.random() * this.gridY);
            colours.push(
                [rx, ry, Colours.colours[rx][ry]]
            );
        }
        this.colourSelectionDialog = new ColourSelectionDialog(
            this.app, this.PIXI, colours, (rx: number, ry: number, clue: string) => this.onSubmitClue(rx, ry, clue)
        )
    }

    revealGuessButton() {
        this.guessButton = new MenuButton(
            this.app, this.PIXI, 600, 660, 200, 40, "Submit Guess", () => this.onSubmitGuess(this.selectedX, this.selectedY)
        )
    }

    revealReadyButton() {
        this.readyButton = new MenuButton(
            this.app, this.PIXI, 600, 660, 100, 40, "Ready", () => this.setPlayerToReady().then(() => this.pollForNextTurn())
        )
    }

    async setPlayerToReady() {
        console.log("setting player to ready")
        let success = true;
        success = await this.gameService.setSelfMetadata(
            this.code, "ready"
        )
        if (!success) return;

        if (this.host && this.phase == 1) {
            success = await this.gameService.resetTurnState(this.code);
        }
        if (success) {
            this.turnState = "ready";
            this.readyButton?.destroy();
            this.readyButton = undefined;
        }
    }

    getTurn() {
        console.log("getting turn")
        this.clue = "";
        this.gameService.getGameData(this.code).then(
            data => {
                console.log(this.code)
                console.log(data)
                if (data.turn == this.gameService.getUserId()) {
                    this.turnState = "clue";
                    this.openColourSelectionDialog();
                } else {
                    this.turnState = "guess";
                    this.pollForClues();
                }
                this.phase = data.phase;
            }
        )
    }

    async getNextTurn() {
        console.log("Setting game state to next turn")
        let num: number = 0;
        const self = await this.gameService.getSelf();
        num = self.player_number;
        const players = await this.gameService.getPlayers(this.code);
        let next_player_id = "";
        let players_sorted = players.sort(
            (p1, p2) => p1.player_number - p2.player_number
        );
        if (num == players_sorted[players_sorted.length - 1].player_number) {
            next_player_id = players_sorted[0].user_id;
        } else {
            for (let i = 0; i < players_sorted.length; i++) {
                if (players_sorted[i].player_number > num) {
                    next_player_id = players_sorted[i].user_id;
                    break;
                }
            }
        }
        return await this.gameService.updateGameTurn(this.code, next_player_id);
    }

    pollForPlayers() {
        console.log("polling for players")
        this.gameService.getPlayers(this.code).then(
            players => {
                this.players = players;
                this.onDisplayPlayers();
                this.gameService.getGameMetadata(this.code).then(
                    metadata => {
                        if (metadata == "started") this.getTurn();
                    }
                )
            }
        )
        setTimeout(() => {
            if (this.turnState == "start") {
                this.pollForPlayers();
            }
        }, 5000)
    }

    pollForNextTurn() {
        console.log("polling for next turn")
        this.gameService.getPlayers(this.code).then(
            players => {
                if (
                    players.every(
                        player => player.metadata.includes("ready")
                    )
                ) {
                    this.turnState = "";
                    this.getTurn();
                }
            }
        )
        setTimeout(() => {
            console.log("timeout")
            console.log(this.turnState)
            if (this.turnState == "ready") {
                this.pollForNextTurn();
            }
        }, 5000)
    }

    pollForGuesses() {
        this.gameService.getGuesses(this.code).then(
            guesses => {
                this.guesses = guesses
                return this.gameService.getPlayers(this.code)
            }
        ).then(
            players => {
                if (this.guesses.filter(guess => guess.phase == this.phase).length == players.length - 1) {
                    this.turnState = "reveal";
                    this.revealReadyButton();
                }
            }
        )

        setTimeout(() => {
            if (this.turnState == "clue" || this.turnState == "guess") {
                this.pollForGuesses();
            }
        }, 5000)
    }

    pollForClues() {
        this.gameService.getClue(this.code, this.phase).then(
            data => {
                if (data != undefined) {
                    this.clue = data.clue;
                    this.revealGuessButton();
                }
            }
        )
        setTimeout(() => {
            if (this.clue == "") {
                this.pollForClues();
            }
        }, 5000)
    }

    onGeneralClick(x: number, y: number): void {
        this.colourSelectionDialog?.onGeneralClick();
    }

    destroy(): void {
        this.grid.forEach(
            row => row.forEach(
                tile => tile.destroy()
            )
        )

        this.colourSelectionDialog?.destroy();
        this.guessButton?.destroy();
        this.startButton?.destroy();
        this.rightPanel?.destroy();
        this.playerDisplays.forEach(
            display => display.destroy()
        );
    }
}
