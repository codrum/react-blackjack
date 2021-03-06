import { allCards, CardID, HandValue } from '../types/Card'
import { Hand } from '../types/Hand'
import { computeValueOfHand } from "./computeValueOfHand"

describe('compute value of hand', () => {
	it.each<[Hand, HandValue]>([
		[
			['2H', '5S'],
			[7, 7],
		],
		[
			['3H', 'TS'],
			[13, 13],
		],
		[['AS'], [1, 11]],
		[
			['AS', 'AD'],
			[2, 12],
		],
		[
			['2C', 'AS', 'AD'],
			[4, 14],
		],
		[
			['AS', 'AD', 'AH'],
			[3, 13],
		],
		[
			['AS', 'AD', 'AH', 'AD'],
			[4, 14],
		],
		[
			['AS', 'AD', 'AH', 'AD', 'JD'],
			[14, 14],
		],
		[
			['AS', 'AD', 'AH', 'AD', '9D'],
			[13, 13],
		],
		[
			['TD', 'TH', '5H'],
			[0, 0],
		],
		[
			['TD', 'TH', 'AH'],
			[21, 21],
		],
		[
			['TD', 'TH', 'AH', 'AD'],
			[0, 0],
		],
		[Object.keys(allCards) as CardID[], [0, 0]],
	])('When cards are %s expect %s', (hand, expectedValue) => {
		let value: HandValue = computeValueOfHand(hand)
		expect(value).toStrictEqual(expectedValue)
	})
})
