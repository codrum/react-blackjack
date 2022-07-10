import { Deck } from '../types/Deck';
import { Hand } from '../types/Hand';
import { draw } from "./draw";

type DealOptions = {
	numberOfHands: number;
	deck: Deck;
	cardsPerHand: number;
};

export const deal = ({
	cardsPerHand, deck: inputDeck, numberOfHands
}: DealOptions): {
	hands: Hand[];
	deck: Deck;
 } => {
	const hands: Hand[] = new Array(numberOfHands).fill([]);
	let deck: Deck = inputDeck;

	for (let i = 0; i < cardsPerHand; i++) {
		for (let j = 0; j < hands.length; j++) {
			const { newHand, newDeck } = draw({
				deck,
				hand: hands[j]
			});
			hands[j] = newHand;
			deck = newDeck;
		}
	}

	return {
		hands,
		deck,
	};
};
