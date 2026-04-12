import { Colours } from "../data/Colours";
import { Entity } from "../Entity";

export class Card extends Entity {
    private readonly SIZE: number = 32;
    private static texture: any;
    private sprite: any;
    constructor(world: any, PIXI: any, private value: number, private suit: number, x: number, y: number) {
        super(world, PIXI);
        const rectangle = new this.PIXI.Rectangle(73 * (value-1), 98* suit, 73, 98);
        this.getTexture().then(
            texture => {
                const croppedTexture = new this.PIXI.Texture({
                    source: texture.source,
                    frame: rectangle
                });
                const sprite = new this.PIXI.Sprite(croppedTexture)
                sprite.x = x
                sprite.y = y;
                this.world.addChild(sprite);
                this.sprite = sprite
            }
        )
    }

    private async getTexture() {
        if (Card.texture == undefined) Card.texture = await this.PIXI.Assets.load('../../../../assets/sprites/cards.png');
        return Card.texture;
    }

    update(delta: number): void {

    }

    destroy(): void {
        this.sprite?.destroy();
    }
}
