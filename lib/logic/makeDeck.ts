import { CardID, allCards } from '../types/Card'
import { Deck } from '../types/Deck'
import { Hand } from '../types/Hand'
import { shuffle } from './shuffle'
import { makeHand } from './makeHand'

export const makeDeck = (): Deck => {
	const cards: CardID[] = shuffle(Object.keys(allCards) as CardID[])

	const deck: Deck = {
		draw() {
			let topCard = cards.shift()
			// console.log(topCard)
			if (topCard === undefined) {
				throw new Error('Cards are all washed up')
			}
			return topCard
		},
		deal(numberOfHands) {
			let hands: Hand[] = new Array(numberOfHands).fill(0).map(makeHand)
			for (let i = 0; i < 2; i++) {
				for (let hand of hands) {
					hand.draw(deck)
				}
			}
			return hands
		},
	}

	return deck
}
