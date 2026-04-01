import { Colours } from "../data/Colours";
import { Entity } from "../Entity";

export class MenuButton extends Entity {
    private block: any;
    private text: any;
    private x_start: number;
    private y_start: number;
    private action: any;
    constructor(
        app: any,
        PIXI: any,
        x_start: number,
        y_start: number,
        width: number,
        height: number,
        text: string,
        action: () => void
    ) {
        super(app, PIXI);
        this.x_start = x_start;
        this.y_start = y_start;
        this.block = new this.PIXI.Graphics();
        this.block.beginFill(Colours.LightGray);
        this.block.drawRect(
            x_start,
            y_start,
            width,
            height
        );
        this.block.endFill();
        
        this.text = new PIXI.Text(text, { fontFamily: 'Arial', fontSize: height/1.3, fill: Colours.Black, align: 'center' });
        this.text.x = this.x_start + 5;
        this.text.y = this.y_start + 5;
        this.action = action;

        this.block.eventMode = 'static';
        this.block.on('pointerdown', () => {
            console.log("click1")
            this.action();
        });
        this.text.eventMode = 'static';
        this.text.on('pointerdown', () => {
            console.log("click2")
            this.action();
        });

        this.app.stage.addChild(this.block);
        this.app.stage.addChild(this.text);
    }

    update(delta: number): void {

    }

    destroy(): void {
        this.block.destroy();
        this.text.destroy();
    }
}
