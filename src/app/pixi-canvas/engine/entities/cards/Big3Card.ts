import { Colours } from "../../data/Colours";
import { Entity } from "../../Entity";
import { Card } from "./Card";

export class Big3Card extends Card {
    private selected = false;
    constructor(
        world: any,
        PIXI: any,
        public readonly card: { rank: number, suit: number },
        private onClick: () => void = () => { }
    ) {
        super(world, PIXI, 1 + (card.rank + 3) % 13, card.suit, 0, 0, onClick);
    }

    toggleSelect() {
        this.selected = !this.selected;
        if (this.selected) this.sprite.y -= 10;
        else this.sprite.y += 10;
    }

    isSelected(): boolean {
        return this.selected;
    }

    play() {
        
    }

    update(delta: number): void {

    }
}
