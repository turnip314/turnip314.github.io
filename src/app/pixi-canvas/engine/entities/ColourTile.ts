import { Entity } from "../Entity";

export class ColourTile extends Entity {
    private block: any;
    private readonly SIZE: number = 35;
    private readonly GAPSIZE: number = 4;
    constructor(app: any, PIXI: any, hex: string, row: number, col: number, onClick: (arg0: number, arg1: number) => void) {
        super(app, PIXI);
        this.block = new this.PIXI.Graphics();
        this.block.beginFill(hex);
        this.block.drawRect(
            60 + row * (this.SIZE + this.GAPSIZE),
            30 + col * (this.SIZE + this.GAPSIZE),
            this.SIZE,
            this.SIZE
        );
        this.block.endFill();
        this.block.eventMode = 'static';
        this.block.on('pointerdown', (event: { global: any; }) => {
            onClick(row, col);
        });

        this.app.stage.addChild(this.block);
    }

    update(delta: number): void {

    }

    destroy(): void {
        this.block.destroy();
    }
}
