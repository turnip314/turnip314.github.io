import { Colours } from "../../data/Colours";
import { Entity } from "../../Entity";
import { ColourSelectionTile } from "../ColourSelectionTile";


export class ColourSelectionDialog extends Entity {
    private choices: ColourSelectionTile[] = [];
    private block: any;
    constructor(app: any, PIXI: any, choices: ColourSelectionTile[]) {
        super(app, PIXI);
        this.choices = choices;

        this.block = new this.PIXI.Graphics();
        this.block.beginFill(Colours.LightGray);
        this.block.rect(
            450,
            150,
            400,
            400
        );
        this.block.endFill();
        this.app.stage.addChild(this.block);
        this.choices.forEach(tile => tile.draw());
    }

    update(delta: number): void {
        
    }
    
    destroy(): void {
        this.choices.forEach(tile => tile.destroy());
        this.block.destroy();
    }
}