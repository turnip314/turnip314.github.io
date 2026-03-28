import { Colours } from "../data/Colours";
import { Entity } from "../Entity";

export class ColourTile extends Entity {
    private block: any;
    private border: any;
    private location: [number, number] = [0, 0];
    private readonly SIZE: number = 32;
    private readonly GAPSIZE: number = 4;
    constructor(app: any, PIXI: any, hex: string, x: number, y: number, onClick: (arg0: number, arg1: number) => void) {
        super(app, PIXI);
        this.block = new this.PIXI.Graphics();
        this.block.beginFill(hex);
        this.block.drawRect(
            30 + x * (this.SIZE + this.GAPSIZE),
            30 + y * (this.SIZE + this.GAPSIZE),
            this.SIZE,
            this.SIZE
        );
        this.block.endFill();
        this.block.eventMode = 'static';
        this.block.on('pointerdown', (event: { global: any; }) => {
            onClick(x, y);
        });

        this.location = [x, y];

        this.app.stage.addChild(this.block);
    }

    select() {
        this.border = new this.PIXI.Graphics();
        this.border.beginFill(Colours.Transparent);
        this.border.rect(
            30 + this.location[0] * (this.SIZE + this.GAPSIZE),
            30 + this.location[1] * (this.SIZE + this.GAPSIZE),
            this.SIZE,
            this.SIZE
        );
        this.border.endFill();
        this.border.stroke({ width: 4, color: Colours.White });
        this.border.rect(
            30 + this.location[0] * (this.SIZE + this.GAPSIZE),
            30 + this.location[1] * (this.SIZE + this.GAPSIZE),
            this.SIZE,
            this.SIZE
        )
        this.app.stage.addChild(this.border);
    }

    unselect() {
        this.border?.destroy();
    }

    update(delta: number): void {

    }

    destroy(): void {
        this.block.destroy();
    }
}
