import { CardID } from './Card';
import { Hand } from "./Hand";


export type Deck = { draw: () => CardID; deal: (numberOfHands: number) => Hand[]; };
