import { Entity } from "../Entity";

export class ColourSelectionTile extends Entity {
    private block: any;
    private readonly SIZE: number = 120;
    private readonly GAPSIZE: number = 10;
    constructor(app: any, PIXI: any, hex: string, row: number, col: number, position: number, onClick: (arg0: number, arg1: number) => void) {
        super(app, PIXI);
        this.block = new this.PIXI.Graphics();
        this.block.beginFill(hex);
        this.block.rect(
            525 + Math.floor(position/2) * (this.SIZE + this.GAPSIZE),
            200 + (position % 2) * (this.SIZE + this.GAPSIZE),
            this.SIZE,
            this.SIZE
        );
        this.block.endFill();
        this.block.eventMode = 'static';
        this.block.on('pointerdown', (event: { global: any; }) => {
            onClick(row, col);
        });
    }

    draw() {
        this.app.stage.addChild(this.block);
    }

    update(delta: number): void {

    }

    destroy(): void {
        this.block.destroy();
    }
}
