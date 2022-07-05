import { CardID } from '../types/Card';


export const shuffle = (cardIDs: CardID[]): CardID[] => {
    let cards = [...cardIDs];
    for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    return cards;
};
