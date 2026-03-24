import { Game } from "../Game";
import { Scene } from "../Scene";
import { Colours } from "../data/Colours"
import { ColourSelectionTile } from "../entities/ColourSelectionTile";
import { ColourTile } from "../entities/ColourTile";
import { ColourSelectionDialog } from "../entities/dialog/ColourSelectionDialog";

export class Hues extends Scene {
    private grid: ColourTile[][] = [];
    private readonly gridX = 30;
    private readonly gridY = 16;

    private name: string = "";
    private code: string = "";
    private turn: string = ""; // "clue, guess"
    private selectedRow: number = -1;
    private selectedColum: number = -1;

    private colourSelectionDialog: ColourSelectionDialog | undefined;

    constructor(app: any, PIXI: any, name: string, code: string, game: Game) {
        super(app, PIXI, game);

        for (let i = 0; i < this.gridX; i++) {
            let row: Array<any> = [];
            for (let j = 0; j < this.gridY; j++) {
                row.push(new ColourTile(app, PIXI, Colours.colours[i][j], i, j, (arg0: number, arg1: number) => this.onColourTileClick(arg0, arg1)));
            }
            this.grid.push(row);
        }

        this.name = name;
        this.code = code;
        this.openColourSelectionDialog();
    }

    update(delta: number) {

    }

    onColourTileClick(row: number, col: number) {
        if (this.turn == "guess") {
            this.selectedRow = row;
            this.selectedColum = col;
        }
    }

    onColourSelectionTileClick(row: number, col: number) {
        if (this.turn == "clue") {
            this.selectedRow = row;
            this.selectedColum = col;
        }
    }

    openColourSelectionDialog() {
        let colours: ColourSelectionTile[] = []
        for (let i = 0; i < 4; i++) {
            let rr = Math.floor(Math.random() * this.gridX);
            let rc = Math.floor(Math.random() * this.gridY);
            colours.push(
                new ColourSelectionTile(
                    this.app, this.PIXI, Colours.colours[rr][rc], rr, rc, i, 
                    (arg0: number, arg1: number) => this.onColourSelectionTileClick(arg0, arg1)
                )
            )
        }
        this.colourSelectionDialog = new ColourSelectionDialog(
            this.app, this.PIXI, colours
        )
    }

    destroy(): void {
        this.grid.forEach(
            row => row.forEach(
                tile => tile.destroy()
            )
        )

        this.colourSelectionDialog?.destroy();
    }
}
