import { GameService } from "../../../shared/services/game.service";
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

    private name: string = "";
    private code: string = "";
    private turn: string = ""; // "clue, guess, reveal, ready"
    private selectedX: number = -1;
    private selectedY: number = -1;
    private clue: string = ""
    private guesses: any[] = [];

    private colourSelectionDialog: ColourSelectionDialog | undefined;
    private guessButton: MenuButton | undefined;
    private readyButton: MenuButton | undefined;

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

        this.name = name;
        this.code = code;
        this.getTurn();
    }

    update(delta: number) {
        this.colourSelectionDialog?.update(delta);
    }

    onColourTileClick(x: number, y: number) {
        if (this.turn == "guess") {
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

    onSubmitClue(x: number, y: number, clue: string) {
        /* Called after a clue is given */
        console.log(x, y, clue)
        if (this.turn == "clue") {
            this.selectedX = x;
            this.selectedY = y;
            this.clue = clue;
            this.colourSelectionDialog?.destroy();
            this.gameService.submitClueAndResetPlayerStatus(
                this.code, x, y, clue
            ).then(
                (success) => {
                    // Calculate the next person whose turn it is to give a clue
                    if (success) return this.getNextTurn();
                }
            ).then(
                success => {
                    // Wait for everyone to guess
                    if (success) this.pollForGuesses();
                }
            ).finally(
                () => {
                    this.selectedX = -1;
                    this.selectedY = -1;
                }
            )
        }
    }

    onSubmitGuess(x: number, y: number) {
        if (this.turn == "guess") {
            console.log("submitting guess")
            this.gameService.submitGuess(
                this.code, x, y
            ).then(
                success => {
                    if (success) {
                        console.log("polling for guesses")
                        this.turn = "";
                        this.pollForGuesses();
                    }
                }
            ).finally(
                () => {
                    this.selectedX = -1;
                    this.selectedY = -1;
                    this.guessButton?.destroy();
                    this.onResetSelect();
                }
            )
        }
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
            this.app, this.PIXI, 600, 660, 150, 40, "Submit Guess", () => this.onSubmitGuess(this.selectedX, this.selectedY)
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
        if (this.host) {
            success = await this.gameService.resetTurnState(this.code);
            if (!success) throw "Cannot reset game state";
        }
        success = await this.gameService.setSelfMetadata(
            this.code, "ready"
        )
        if (success) {
            this.turn = "ready";
            this.readyButton?.destroy();
            this.readyButton = undefined;
        }
    }

    getTurn() {
        console.log("getting turn")
        this.clue = "";
        this.gameService.getGameMetadata(this.code).then(
            metadata => {
                console.log(this.code)
                console.log(metadata)
                if (metadata.includes(`turn:${this.gameService.getUserId()}`)) {
                    this.turn = "clue";
                    this.openColourSelectionDialog();
                } else {
                    this.turn = "guess";
                    this.pollForClues();
                }
            }
        )
    }

    async getNextTurn() {
        console.log("Setting game state to next turn")
        let num: number = 0;
        const self = await this.gameService.getSelf(this.code);
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
        return await this.gameService.setGameMetadata(this.code, `turn:${next_player_id}`);
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
                    this.turn = "";
                    this.getTurn();
                }
            }
        )
        setTimeout(() => {
            console.log("timeout")
            console.log(this.turn)
            if (this.turn == "ready") {
                this.pollForNextTurn();
            }
        }, 5000)
    }

    pollForGuesses() {
        this.gameService.getGuesses(this.code).then(
            guesses => {
                this.guesses = guesses;
                return this.gameService.getPlayers(this.code)
            }
        ).then(
            players => {
                if (this.guesses.length == players.length - 1) {
                    this.turn = "reveal";
                    this.revealReadyButton();
                }
            }
        )

        setTimeout(() => {
            if (this.turn == "clue" || this.turn == "guess") {
                this.pollForGuesses();
            }
        }, 5000)
    }

    pollForClues() {
        this.gameService.getClue(this.code).then(
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
    }
}
