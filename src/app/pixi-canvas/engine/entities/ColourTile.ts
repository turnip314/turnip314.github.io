import { Colours } from "../data/Colours";
import { Entity } from "../Entity";

export class ColourTile extends Entity {
    private block: any;
    private border: any;
    private scoreText: any;
    private location: [number, number] = [0, 0];
    private readonly SIZE: number = 32;
    private readonly GAPSIZE: number = 4;
    constructor(world: any, PIXI: any, hex: string, x: number, y: number, onClick: (arg0: number, arg1: number) => void) {
        super(world, PIXI);
        this.block = new this.PIXI.Graphics()
            .rect(
                30 + x * (this.SIZE + this.GAPSIZE),
                30 + y * (this.SIZE + this.GAPSIZE),
                this.SIZE,
                this.SIZE
            )
            .fill({ color: hex });
        this.block.eventMode = 'static';
        this.block.on('pointerdown', (event: { global: any; }) => {
            onClick(x, y);
        });

        this.location = [x, y];

        this.world.addChild(this.block);
    }

    select() {
        this.border = new this.PIXI.Graphics()
            .rect(
                30 + this.location[0] * (this.SIZE + this.GAPSIZE),
                30 + this.location[1] * (this.SIZE + this.GAPSIZE),
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

    displayScore(score: number) {
        this.scoreText = new this.PIXI.Text(score.toString(), { fontFamily: 'Arial', fontSize: 24, fill: Colours.BlackTranslucent, align: 'center' });
        this.scoreText.x = 800;
        this.scoreText.y = 604;
        this.world.addChild(this.scoreText);
    }

    update(delta: number): void {

    }

    destroy(): void {
        this.block.destroy();
        this.scoreText?.destroy();
    }
}
