import { allCards, CardID, CardValues, HandValue } from '../types/Card'
import { Hand } from '../types/Hand'

export const makeHand = (): Hand => {
	let cards: CardID[] = []
	return {
		cards,
		draw(deck) {
			cards.push(deck.draw())
		},
	}
}

export const computeValueOfHand = (cardID: CardID[]): HandValue => {
	let lowValue = 0
	let highValue = 0
	let aceCount = 0
	for (let id of cardID) {
		let [firstCard, secondCard] = allCards[id]
		// if we got an ace
		if (allCards[id].length > 1) {
			aceCount++
			highValue += secondCard
		} else {
			highValue += firstCard
		}
		lowValue += firstCard
	}
	while (highValue > 21 && aceCount != 0) {
		aceCount--
		highValue -= 10
	}

	if (lowValue > 21 && highValue > 21) return [0, 0]
	return [lowValue, highValue]
}
