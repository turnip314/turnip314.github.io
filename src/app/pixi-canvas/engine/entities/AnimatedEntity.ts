import { Colours } from "../data/Colours";
import { Entity } from "../Entity";

export class AnimatedEntity extends Entity {

    private elapsedTime: number = 0;

    private isDynamic: boolean = true;

    constructor(
        world: any, PIXI: any,
        protected sprite: any,
        private startX: number = 0,
        private startY: number = 0,
        private finalX: number = 0,
        private finalY: number = 0,
        private totalTime: number = 10,
        private destroyOnEnd: boolean = false
    ) {
        super(world, PIXI);
    }

    update(delta: number): void {
        if (!this.isDynamic) return;
        this.elapsedTime = Math.min(this.elapsedTime + delta, this.totalTime);
        const posX = this.startX + (this.finalX - this.startX)*this.elapsedTime/this.totalTime
        const posY = this.startY + (this.finalY - this.startY)*this.elapsedTime/this.totalTime
        this.sprite.x = posX;
        this.sprite.y = posY;
    }

    isAlive(): boolean {
        return this.elapsedTime <= this.totalTime;
    }

    pause(): void {
        this.isDynamic = false;
    }

    start(): void {
        this.isDynamic = true;
    }

    destroy(): void {
        if (this.destroyOnEnd) {
            this.sprite?.destroy();
        }
    }
}
