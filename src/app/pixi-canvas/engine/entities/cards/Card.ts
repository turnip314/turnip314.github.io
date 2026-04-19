import { Colours } from "../../data/Colours";
import { Textures } from "../../data/Textures";
import { Entity } from "../../Entity";
import { AnimatedEntity } from "../AnimatedEntity";

export class Card extends Entity {
    protected readonly SIZE: number = 32;
    protected static texture: any;
    protected static backTexture: any;
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
        const texture = Textures.cardTexture;
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

    update(delta: number): void {

    }

    show() {
        if (!this.sprite) {
            setTimeout(() => this.show(), 300);
            return;
        }
        const rectangle = new this.PIXI.Rectangle(73 * (this.value - 1), 98 * this.suit, 73, 98);
        const texture = Textures.cardTexture;
        const croppedTexture = new this.PIXI.Texture({
            source: texture.source,
            frame: rectangle
        });
        this.sprite.texture = croppedTexture;
    }

    hide() {
        const texture = Textures.cardBackTexture;
        this.sprite.texture = texture
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

    animateSlide(x_start: number, y_start: number, x_end: number, y_end: number): AnimatedEntity {
        return new AnimatedEntity(
            this.world,
            this.PIXI,
            this.sprite,
            x_start,
            y_start,
            x_end,
            y_end,
            30
        );
    }

    animateSlideTo(x_end: number | undefined, y_end: number | undefined = undefined, discard=false): AnimatedEntity {
        if (discard) {
            setTimeout(
                () => this.hide(), 10
            )
        }
        return new AnimatedEntity(
            this.world,
            this.PIXI,
            this.sprite,
            this.sprite.x,
            this.sprite.y,
            x_end || this.sprite.x,
            y_end || this.sprite.y,
            30,
        );
    }

    destroy(): void {
        this.sprite?.destroy();
    }
}
