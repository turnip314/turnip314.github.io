import { Colours } from "../data/Colours";
import { Entity } from "../Entity";

export class MenuButton extends Entity {
    private block: any;
    private text: any;
    private x_start: number;
    private y_start: number;
    private action: any;
    constructor(
        world: any,
        PIXI: any,
        x_start: number,
        y_start: number,
        width: number,
        height: number,
        text: string,
        action: () => void
    ) {
        super(world, PIXI);
        this.x_start = x_start;
        this.y_start = y_start;
        this.block = new this.PIXI.Graphics()
            .rect(
                x_start,
                y_start,
                width,
                height
            )
            .fill({color: Colours.LightGray})
            .stroke({ width: 4, color: Colours.White });

        this.text = new PIXI.Text(text, { fontFamily: 'Arial', fontSize: height / 1.3, fill: Colours.Black, align: 'center' });
        this.text.x = this.x_start + 5;
        this.text.y = this.y_start + 5;
        this.action = action;

        this.block.eventMode = 'static';
        this.block.on('pointerdown', () => {
            console.log("click1")
            this.action();
        });
        this.text.eventMode = 'none';

        this.world.addChild(this.block);
        this.world.addChild(this.text);
    }

    update(delta: number): void {

    }

    destroy(): void {
        this.block.destroy();
        this.text.destroy();
    }
}
