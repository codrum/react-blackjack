import { allCards, Cards, HandValue } from '../types/Card';


export const computeValueOfHand = (cards: Cards): HandValue => {
	let lowValue = 0;
	let highValue = 0;
	let aceCount = 0;
	for (let id of cards) {
		let [firstCard, secondCard] = allCards[id];
		// if we got an ace
		if (allCards[id].length > 1) {
			aceCount++;
			highValue += secondCard;
		} else {
			highValue += firstCard;
		}
		lowValue += firstCard;
	}
	while (highValue > 21 && aceCount != 0) {
		aceCount--;
		highValue -= 10;
	}

	if (lowValue > 21 && highValue > 21)
		return [0, 0];
	return [lowValue, highValue];
};
