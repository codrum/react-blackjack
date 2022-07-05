import { CardID } from '../types/Card';
import { Hand } from '../types/Hand';


export const makeHand = (): Hand => {
    let hand: CardID[] = [];
    return {
        hand,
        draw(deck) {
            hand.push(deck.draw());
        }
    };
};
