import { Deck } from '../types/Deck';
import { Hand } from '../types/Hand';

type DrawOptions = {
	hand: Hand;
	deck: Deck;
};

export const draw = ({
	hand, deck,
}: DrawOptions): {
	newDeck: Deck;
	newHand: Hand;
} => {
	const [topCard, ...newDeck] = deck;
	if (topCard === undefined) {
		throw new Error('Cards are all washed up');
	}
	return {
		newHand: [...hand, topCard],
		newDeck,
	};
};
