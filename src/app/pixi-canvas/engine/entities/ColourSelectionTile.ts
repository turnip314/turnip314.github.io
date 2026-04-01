import { Colours } from "../data/Colours";
import { Entity } from "../Entity";

export class ColourSelectionTile extends Entity {
    private block: any;
    private border: any;
    private position: number;
    private readonly SIZE: number = 120;
    private readonly GAPSIZE: number = 10;
    constructor(world: any, PIXI: any, hex: string, row: number, col: number, position: number, onClick: (row: number, col: number, pos: number) => void) {
        super(world, PIXI);
        this.position = position;
        this.block = new this.PIXI.Graphics();
        this.block.beginFill(hex);
        this.block.rect(
            515 + Math.floor(position/2) * (this.SIZE + this.GAPSIZE),
            200 + (position % 2) * (this.SIZE + this.GAPSIZE),
            this.SIZE,
            this.SIZE
        );
        this.block.endFill();
        this.block.eventMode = 'static';
        this.block.on('pointerdown', (event: { global: any; }) => {
            onClick(row, col, position);
        });
    }

    draw() {
        this.world.addChild(this.block);
    }

    select() {
        this.border = new this.PIXI.Graphics();
        this.border.beginFill(Colours.Transparent);
        this.border.rect(
            515 + Math.floor(this.position/2) * (this.SIZE + this.GAPSIZE),
            200 + (this.position % 2) * (this.SIZE + this.GAPSIZE),
            this.SIZE,
            this.SIZE
        );
        this.border.endFill();
        this.border.stroke({ width: 4, color: Colours.White });
        this.border.drawRect(
            515 + Math.floor(this.position/2) * (this.SIZE + this.GAPSIZE),
            200 + (this.position % 2) * (this.SIZE + this.GAPSIZE),
            this.SIZE,
            this.SIZE
        );
        this.world.addChild(this.border);
    }

    unselect() {
        this.border?.destroy();
    }

    update(delta: number): void {

    }

    destroy(): void {
        this.block.destroy();
        this.border?.destroy();
    }
}
