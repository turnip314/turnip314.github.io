import { Colours } from "../../data/Colours";
import { Entity } from "../../Entity";
import { ColourSelectionTile } from "../ColourSelectionTile";
import { MenuButton } from "../MenuButton";
import { TextField } from "../TextField";


export class ColourSelectionDialog extends Entity {
    private choices: ColourSelectionTile[] = [];
    private container: any;
    private block: any;
    private text: any;
    private clue: TextField | undefined;
    private submit: MenuButton | undefined;
    private locked: boolean = false;
    private x: number = -1;
    private y: number = -1;
    constructor(
        world: any, PIXI: any,
        choices: [number, number, string][],
        onSubmit: (x: number, y: number, clue: string) => void,
        choice: [number, number] | undefined = undefined // locks the choice
    ) {
        super(world, PIXI);

        this.container = new this.PIXI.Container();

        // Position the container
        this.container.x = 440;
        this.container.y = 150;

        this.world.addChild(this.container);

        this.block = new this.PIXI.Graphics()
            .rect(0, 0, 350, 400)
            .fill({color: Colours.BlackTranslucent});
        this.container.addChild(this.block);

        choices.forEach(
            choice => this.choices.push(
                new ColourSelectionTile(
                    this.block, PIXI, choice[2], choice[0], choice[1], this.choices.length, (x, y, p) => this.onSelectColour(x, y, p)
                )
            )
        )

        this.text = new PIXI.Text("Select a colour", { fontFamily: 'Arial', fontSize: 24, fill: Colours.White, align: 'center' });
        this.text.x = 50;
        this.text.y = 10;
        this.container.addChild(this.text);

        this.clue = new TextField(
            this.container, PIXI, 50, 330, 200, 50, "Clue"
        )

        this.submit = new MenuButton(
            this.container, PIXI, 270, 330, 55, 50, ">>", () => {
                if (this.clue?.getText() == "") return;
                if (this.x == -1) return;
                if (this.y == -1) return;
                onSubmit(this.x, this.y, this.clue?.getText() || "")
            }
        )

        if (choice != undefined) {
            for (let i = 0; i < this.choices.length; i++) {
                if (choices[i][0] == choice[0] && choices[i][1] == choice[1]) this.onSelectColour(choice[0], choice[1], i);
            }
            this.locked = true;
        }
    }

    update(delta: number): void {
        this.clue?.update(delta);
    }

    onSelectColour(x: number, y: number, pos: number): void {
        if (this.locked) return;
        this.x = x;
        this.y = y;
        this.choices.forEach(
            tile => tile.unselect()
        )
        this.choices[pos].select();
    }

    onGeneralClick(): void {
        this.clue?.unselect();
    }

    destroy(): void {
        this.choices.forEach(tile => tile.destroy());
        this.block.destroy();
        this.text.destroy();
        this.clue?.destroy();
        this.submit?.destroy();
        this.container?.destroy();
    }
}