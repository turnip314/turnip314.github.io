import { Colours } from "../data/Colours";
import { Entity } from "../Entity";

export class MenuButton extends Entity {
    private context: any[] = [];
    private block: any;
    private text: any;
    private x_start: number;
    private y_start: number;
    private action: any;
    private selected: boolean = false;
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

        this.context = [
            new this.PIXI.GraphicsContext().roundRect(
                x_start+3,
                y_start+3,
                width-3,
                height-3
            )
            .fill({color: Colours.WhiteTranslucent})
            .stroke({ width: 4, color: Colours.WhiteTranslucent })
            .roundRect(
                x_start,
                y_start,
                width,
                height
            )
            .fill({color: Colours.BlueShadow})
            .stroke({ width: 4, color: Colours.WhiteTranslucent }),
            new this.PIXI.GraphicsContext().roundRect(
                x_start+2,
                y_start+2,
                width,
                height
            )
            .fill({color: Colours.BlueShadow})
            .stroke({ width: 4, color: Colours.WhiteTranslucent }),
        ];

        this.x_start = x_start;
        this.y_start = y_start;
        this.block = new this.PIXI.Graphics(this.context[0]);
        this.block.cursor = "pointer";

        this.text = new PIXI.Text(text, { fontFamily: 'Arial', fontSize: height / 1.4, fill: Colours.White, align: 'center' });
        this.text.x = this.x_start + width/2 - this.text.width/2 - 2;
        this.text.y = this.y_start + 5;
        this.action = action;

        this.block.eventMode = 'static';
        this.block.on('pointerdown', () => {
            this.select();
        });
        this.block.on('pointerup', () => {
            if (this.selected) {
                this.action();
                this.unselect();
            }
        });
        this.block.on('pointerleave', () => {
            this.unselect();
        });
        this.text.eventMode = 'none';

        this.world.addChild(this.block);
        this.world.addChild(this.text);
    }

    update(delta: number): void {

    }

    select() {
        if (this.selected) return;
        this.selected = true;
        this.block.context = this.context[1];
        this.text.x += 2;
        this.text.y += 2;
    }

    unselect() {
        if (!this.selected) return;
        this.selected = false;
        this.block.context = this.context[0];
        this.text.x -= 2;
        this.text.y -= 2;
    }

    destroy(): void {
        this.block.destroy();
        this.text.destroy();
    }
}
