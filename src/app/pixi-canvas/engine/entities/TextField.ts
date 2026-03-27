import { Colours } from "../data/Colours";
import { Entity } from "../Entity";
import { Input } from "../system/input";

export class TextField extends Entity {
    private name: string
    private block: any;
    private text: string = "";
    private flashTimer = 40;
    private textBox: any;
    private selected: boolean = false;
    private input = new Input();
    private selectionDelay: number = 5;
    constructor(
        app: any,
        PIXI: any,
        x_start: number,
        y_start: number,
        width: number,
        height: number,
        name: string
    ) {
        super(app, PIXI);
        this.name = name;

        this.block = new this.PIXI.Graphics();
        this.block.beginFill(Colours.LightGray);
        this.block.drawRect(
            x_start,
            y_start,
            width,
            height
        );
        this.block.endFill();
        this.block.stroke({ width: 4, color: Colours.White });
        this.block.drawRect(
            x_start,
            y_start,
            width,
            height
        );
        this.textBox = new PIXI.Text("", { fontFamily: 'Arial', fontSize: 24 * height/40, fill: 0x000000, align: 'center' });
        this.textBox.x = x_start + 10;
        this.textBox.y = y_start + 10;

        this.block.eventMode = 'static';
        this.block.on('pointerdown', (event: any) => {
            this.selected = true;
        });
        this.textBox.eventMode = 'static';
        this.textBox.on('pointerdown', (event: any) => {
            this.selected = true;
        });

        this.app.stage.addChild(this.block);
        this.app.stage.addChild(this.textBox);

        this.input.addListener(this);
    }

    update(delta: number): void {
        this.flashTimer -= delta;
        if (this.flashTimer <= -40) {
            this.flashTimer = 40;
        }

        if (this.selected) {
            this.textBox.style.fill = Colours.Black;
            if (this.flashTimer < 0) this.textBox.text = this.text + "|";
            else this.textBox.text = this.text;
            this.selectionDelay -= delta;
        } else if (this.text == "") {
            this.textBox.style.fill = Colours.BlackTranslucent;
            this.textBox.text = this.name
        }
    }

    notify(key: any) {
        if (this.selected && this.text.length < 10 && key.length <= 1) {
            this.text += key;
        }
        else if (this.selected && key == "Backspace") {
            this.text = this.text.slice(0, this.text.length-1);
        }
    }

    select(): void {
        this.selected = true;
        this.selectionDelay = 5;
        console.log(123)
    }

    unselect(): void {
        if (this.selectionDelay < 0) {
            this.selected = false;
            this.selectionDelay = 5;
        }
        
    }

    destroy(): void {
        this.block.destroy();
        this.textBox.destroy();
    }

    getText(): string {
        return this.text;
    }
}
