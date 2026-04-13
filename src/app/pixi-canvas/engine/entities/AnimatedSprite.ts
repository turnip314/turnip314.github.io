import { Colours } from "../data/Colours";
import { Entity } from "../Entity";

export class AnimatedEntity extends Entity {
    private startX: number = 0;
    private startY: number = 0;
    private finalX: number = 0;
    private finalY: number = 0;
    private totalTime: number = 1;
    private elapsedTime: number = 0;

    private isDynamic: boolean = false;

    constructor(world: any, PIXI: any, protected sprite: any) {
        super(world, PIXI);
        
    }

    update(delta: number): void {
    }
    
    async slide(time: number, finalX: number, finalY: number) {
        
    }

    
}
