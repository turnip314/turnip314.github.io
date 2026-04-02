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
        this.block = new this.PIXI.Graphics()
            .rect(
                50 + Math.floor(position / 2) * (this.SIZE + this.GAPSIZE),
                50 + (position % 2) * (this.SIZE + this.GAPSIZE),
                this.SIZE,
                this.SIZE
            )
            .fill({color: hex});

        this.block.eventMode = 'static';
        this.block.on('pointerdown', (event: { global: any; }) => {
            onClick(row, col, position);
        });
        this.world.addChild(this.block);
    }

    select() {
        this.border = new this.PIXI.Graphics()
            .rect(
                50 + Math.floor(this.position / 2) * (this.SIZE + this.GAPSIZE),
                50 + (this.position % 2) * (this.SIZE + this.GAPSIZE),
                this.SIZE,
                this.SIZE
            )
            .fill({color: Colours.Transparent})
            .stroke({ width: 4, color: Colours.White });

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
