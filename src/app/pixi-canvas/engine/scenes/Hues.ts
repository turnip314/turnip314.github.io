import { Game } from "../Game";
import { Scene } from "../Scene";
import { Colours } from "../data/Colours"
import { ColourTile } from "../entities/ColourTile";
import { MenuButton } from "../entities/MenuButton";
import { ColourSelectionDialog } from "../entities/dialog/ColourSelectionDialog";
import { HuesService } from "../services/hues.service";

export class Hues extends Scene {
    private grid: ColourTile[][] = [];
    private colourChoices: [number, number, string][] = [];
    private readonly gridX = 30;
    private readonly gridY = 16;

    private host = false;

    private phase: number = 0;
    private code: string = "";
    private turn: string = ""; // "clue, guess"
    private turnState: string = ""; // "clue, guess, reveal, ready"
    private selectedX: number = -1;
    private selectedY: number = -1;
    private clueX: number = -1;
    private clueY: number = -1;
    private score: number = 0;
    private guesses: any[] = [];
    private players: any[] = [];
    private playerDisplays: any[] = [];

    private colourSelectionDialog: ColourSelectionDialog | undefined;
    private guessButton: MenuButton | undefined;
    private readyButton: MenuButton | undefined;
    private startButton: MenuButton | undefined;
    private rightPanel: any;
    private roomCodeDisplay: any[] = [];
    private clueText: any;
    private scoreText: any;

    constructor(world: any, PIXI: any, name: string, code: string, game: Game, private gameService: HuesService, host = false) {
        super(world, PIXI, game);
        this.host = host;

        for (let i = 0; i < this.gridX; i++) {
            let row: Array<any> = [];
            for (let j = 0; j < this.gridY; j++) {
                row.push(new ColourTile(world, PIXI, Colours.colours[i][j], i, j, (x: number, y: number) => this.onColourTileClick(x, y)));
            }
            this.grid.push(row);
        }

        this.code = code;

        this.rightPanel = new this.PIXI.Graphics();
        this.rightPanel.beginFill(Colours.LightGray);
        this.rightPanel.drawRect(
            1110,
            30,
            160,
            680
        );
        this.rightPanel.endFill();
        this.world.addChild(this.rightPanel);

        if (this.host) {
            let joinText = new this.PIXI.Text("Room Code:", { fontFamily: 'Arial', fontSize: 24, fill: Colours.White, align: 'center' });
            joinText.x = 30;
            joinText.y = 604;
            let codeText = new this.PIXI.Text(this.code, { fontFamily: 'Arial', fontSize: 24, fill: Colours.White, align: 'center' });
            codeText.x = 170;
            codeText.y = 604;
            this.world.addChild(joinText);
            this.world.addChild(codeText);
            this.roomCodeDisplay = [joinText, codeText];
        }

        this.clueText = new this.PIXI.Text("Waiting for clue...", { fontFamily: 'Arial', fontSize: 24, fill: Colours.White, align: 'center' });
        this.clueText.x = 800;
        this.clueText.y = 604;
        this.world.addChild(this.clueText);

        this.scoreText = new this.PIXI.Text("Score: 0", { fontFamily: 'Arial', fontSize: 24, fill: Colours.White, align: 'center' });
        this.scoreText.x = 1120;
        this.scoreText.y = 604;
        this.world.addChild(this.scoreText);


        this.turnState = "start";
        if (host) {
            this.turn = "clue";
            this.startButton = new MenuButton(
                this.world, this.PIXI, 440, 610, 200, 40, "Start Game", () => this.onStartGame()
            )
        } else {
            this.turn = "guess";
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
                const text = new this.PIXI.Text(`${player.username} ${player.score}`, { fontFamily: 'Arial', fontSize: 24, fill: Colours.Black, align: 'center' });
                text.x = 1120;
                text.y = 60 + 40 * (player.player_number - start);
                this.world.addChild(text);
                this.playerDisplays.push(
                    text
                )
            }
        )
    }

    onDisplayClueRegions() {
        for (let i = this.clueX-2; i < this.clueX+3; i++) {
            for (let j = this.clueY-2; j < this.clueY+3; j++) {
                if (i >= 0 && j >= 0 && i < this.gridX && j < this.gridY) {

                }
            }
        }
        for (let i = this.clueX-1; i < this.clueX+2; i++) {
            for (let j = this.clueY-1; j < this.clueY+2; j++) {
                if (i >= 0 && j >= 0 && i < this.gridX && j < this.gridY) {
                    
                }
            }
        }
        
    }

    onDisplayPlayerGuesses() {

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
            this.clueX = x;
            this.clueY = y;
            this.clueText.text = `Clue: ${clue}`;
            this.colourSelectionDialog?.destroy();
            success = await this.gameService.submitClueAndResetPlayerStatus(
                this.code, x, y, clue, this.phase
            );
            if (!success) return false;

            if (this.phase == 1) {
                success = await this.getNextTurn();
                if (!success) return false;
            }

            // Note: phase is updated pre-emptively but should not be fetched until all players are ready
            success = await this.gameService.updateGamePhase(this.code, 1 - this.phase);
            this.pollForGuesses();
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
            if (!success) {
                this.gameService.getGuesses(this.code).then(
                    guesses => this.guesses = guesses
                );
                return false;
            }

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
        if (this.phase == 0) {
            this.colourChoices = [];
            for (let i = 0; i < 4; i++) {
                let rx = Math.floor(Math.random() * this.gridX);
                let ry = Math.floor(Math.random() * this.gridY);
                this.colourChoices.push(
                    [rx, ry, Colours.colours[rx][ry]]
                );
            }
            this.colourSelectionDialog = new ColourSelectionDialog(
                this.world, this.PIXI, this.colourChoices, (rx: number, ry: number, clue: string) => this.onSubmitClue(rx, ry, clue)
            );
        } else {
            this.colourSelectionDialog = new ColourSelectionDialog(
                this.world, this.PIXI, this.colourChoices, (rx: number, ry: number, clue: string) => this.onSubmitClue(rx, ry, clue),
                [this.clueX, this.clueY]
            );
        }


    }

    revealGuessButton() {
        this.guessButton = new MenuButton(
            this.world, this.PIXI, 600, 604, 200, 40, "Submit Guess", () => this.onSubmitGuess(this.selectedX, this.selectedY)
        )
    }

    revealReadyButton() {
        this.readyButton = new MenuButton(
            this.world, this.PIXI, 600, 604, 100, 40, "Ready", () => this.setPlayerToReady().then(() => this.pollForNextTurn())
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

    async getTurn() {
        console.log("getting turn")
        this.clueText.text = "";
        let data = await this.gameService.getGameData(this.code)
        console.log(this.code)
        console.log(data)
        this.phase = data.phase;
        if (data.turn == this.gameService.getUserId()) {
            this.turnState = "clue";
            this.turn = "clue";
            this.openColourSelectionDialog();
        } else {
            this.turnState = "guess";
            this.turn = "guess";
            // IMPORTANT: Only reset selection for guessing turns, since clueing turns remembers previous info
            this.selectedX = -1;
            this.selectedY = -1;
            this.clueX = -1;
            this.clueY = -1;
            this.pollForClues();
        }
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

    async updateScore() {
        this.guesses.forEach(
            guess => {
                if (guess.player_id == this.gameService.getUserId() || this.turn == 'clue') {
                    let dist = Math.max(Math.abs(this.clueX - guess.x), Math.abs(this.clueY - guess.y));
                    if (dist == 0) this.score += 3;
                    else if (dist == 1) this.score += 2;
                    else if (dist == 2) this.score += 1;
                }
            }
        );
        await this.gameService.updateSelfScore(this.code, this.score);
        this.scoreText.text = `Score: ${this.score}`;
    }

    async pollForPlayers() {
        console.log("polling for players")
        let players = await this.gameService.getPlayers(this.code)
        this.players = players;
        this.onDisplayPlayers();
        let metadata = await this.gameService.getGameMetadata(this.code)
        if (metadata == "started") this.getTurn();
        await new Promise(f => setTimeout(f, 5000));
        if (this.turnState == "start") {
            this.pollForPlayers();
        }
    }

    async pollForNextTurn() {
        console.log("polling for next turn")
        let players = await this.gameService.getPlayers(this.code)
        this.players = players;
        this.onDisplayPlayers();
        if (
            players.every(
                player => player.metadata.includes("ready")
            )
        ) {
            this.turnState = "";
            this.getTurn();
        }

        await new Promise(f => setTimeout(f, 5000));
        console.log("timeout")
        console.log(this.turnState)
        if (this.turnState == "ready") {
            this.pollForNextTurn();
        }
    }

    async pollForGuesses() {
        let guesses = await this.gameService.getGuesses(this.code);
        this.guesses = guesses;
        let players = await this.gameService.getPlayers(this.code);
        if (this.guesses.filter(guess => guess.phase == this.phase).length == players.length - 1) {
            this.turnState = "reveal";
            if (this.phase == 1) {
                // Reveal all guesses
                await this.updateScore();
            } else if (this.turn == "clue") {
                // Reveal all guesses
            }
            this.revealReadyButton();
        } else {
            await new Promise(f => setTimeout(f, 5000));
            this.pollForGuesses();
        }
    }

    async pollForClues() {
        let data = await this.gameService.getClue(this.code, this.phase);
        if (data != undefined) {
            this.clueText.text = `Clue: ${data.clue}`;
            this.clueX = data.x;
            this.clueY = data.y;
            this.revealGuessButton();
        }
        await new Promise(f => setTimeout(f, 5000));
        if (this.clueText.text == "") {
            this.pollForClues();
        }
    }

    onGeneralClick(x: number, y: number): void {
        this.colourSelectionDialog?.onGeneralClick();
    }

    destroy(): void {
        this.grid.forEach(
            row => row.forEach(
                tile => tile.destroy()
            )
        );

        this.colourSelectionDialog?.destroy();
        this.guessButton?.destroy();
        this.startButton?.destroy();
        this.rightPanel?.destroy();
        this.playerDisplays.forEach(
            display => display.destroy()
        );
        this.roomCodeDisplay.forEach(
            display => display.destroy()
        );
        this.clueText.destroy();
        this.scoreText.destroy();
    }
}
