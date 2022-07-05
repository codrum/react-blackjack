import { CardID } from './Card';
import { Deck } from './Deck';


export type Hand = { hand: CardID[]; draw: (deck: Deck) => void; };
