import { Colours } from "../../data/Colours";
import { Entity } from "../../Entity";

export class Card extends Entity {
    protected readonly SIZE: number = 32;
    protected static texture: any;
    protected sprite: any;
    constructor(
        world: any,
        PIXI: any,
        protected value: number,
        protected suit: number,
        x: number,
        y: number,
        onClick: () => void = () => { }
    ) {
        super(world, PIXI);
        const rectangle = new this.PIXI.Rectangle(73 * (value - 1), 98 * suit, 73, 98);
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
                this.sprite = sprite;
                this.sprite.eventMode = 'static';
                this.sprite.on('pointerdown', () => {
                    onClick();
                });
            }
        )
    }

    protected async getTexture() {
        if (Card.texture == undefined) Card.texture = await this.PIXI.Assets.load('../../../../assets/sprites/cards.png');
        return Card.texture;
    }

    update(delta: number): void {

    }

    toggleSelect() {

    }

    changePosition(x: number | undefined, y: number | undefined = undefined, z: number | undefined = undefined): boolean {
        if (!this.sprite) return false;
        if (x) this.sprite.x = x;
        if (y) this.sprite.y = y;
        if (z) this.sprite.zIndex = z;
        return true;
    }

    destroy(): void {
        this.sprite?.destroy();
    }
}
