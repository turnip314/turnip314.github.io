import { Colours } from "../../data/Colours";
import { Entity } from "../../Entity";
import { Big3Card } from "./Big3Card";
import { Card } from "./Card";

export class Big3Hand extends Entity {
    private cards: Big3Card[] = [];
    private selectedCards: Big3Card[] = [];
    constructor(
        world: any, 
        PIXI: any,
        cards: {rank: number, suit: number}[],
        private onToggleSelect: () => void
    ) {
        super(world, PIXI);

        cards.forEach(card => {
            this.cards.push(
                new Big3Card(world, PIXI, card, 
                    () => this.toggleSelect(card)
                )
            )
        });
        this.display();
    }

    toggleSelect(card: {rank: number, suit: number}) {
        this.cards.forEach(big3Card => {
            if (big3Card.card.rank == card.rank && big3Card.card.suit == card.suit) {
                big3Card.toggleSelect();
            }
        });
        this.selectedCards = this.cards.filter(
            card => card.isSelected()
        );
        this.onToggleSelect();
    }

    display() {
        const middle = this.cards.length / 2.0;
        for (let i = 0; i < this.cards.length; i++) {
            // The +1 is because PIXI behaves weirdly when x is set to 0, for some unknown reason
            const result = this.cards[i].changePosition(600+(i-middle) * 30+1, 580, i+1);
            if (!result) {
                setTimeout(() => this.display(), 300);
                break;
            } 
        }
    }

    getSelectedCards(): {rank: number, suit: number}[] {
        return this.selectedCards.map(
            card => card.card
        );
    }

    playCards(cards: {rank: number, suit: number}[]): Big3Card[] {
        const playedCards = this.cards.filter(
            card => cards.some(
                data => card.card.rank == data.rank &&  card.card.suit == data.suit
            )
        );
        this.cards = this.cards.filter(card => !playedCards.includes(card));
        this.display();

        return playedCards;
    }

    update(delta: number): void {

    }
}
