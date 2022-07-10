import { CardID, CardValues, HandValue } from './Card'
import { Deck } from './Deck'

export type Hand = {
	cards: CardID[]
	draw: (deck: Deck) => void
}
