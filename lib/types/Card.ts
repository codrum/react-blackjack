import { Face, FaceID } from './Face'
import { Suit, SuitID } from './Suit'

export type Card = {
	id: CardID
}

export type CardValues = {
	value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
}

export type HandValue = number[]

export type CardID = `${FaceID}${SuitID}`

export type Cards = CardID[];

export const allCards: { readonly [id in CardID]: number[] } = {
	'2H': [2],
	'2S': [2],
	'2D': [2],
	'2C': [2],
	'3H': [3],
	'3S': [3],
	'3D': [3],
	'3C': [3],
	'4H': [4],
	'4S': [4],
	'4D': [4],
	'4C': [4],
	'5H': [5],
	'5S': [5],
	'5D': [5],
	'5C': [5],
	'6H': [6],
	'6S': [6],
	'6D': [6],
	'6C': [6],
	'7H': [7],
	'7S': [7],
	'7D': [7],
	'7C': [7],
	'8H': [8],
	'8S': [8],
	'8D': [8],
	'8C': [8],
	'9H': [9],
	'9S': [9],
	'9D': [9],
	'9C': [9],
	TH: [10],
	TS: [10],
	TD: [10],
	TC: [10],
	JH: [10],
	JS: [10],
	JD: [10],
	JC: [10],
	QH: [10],
	QS: [10],
	QD: [10],
	QC: [10],
	KH: [10],
	KS: [10],
	KD: [10],
	KC: [10],
	AH: [1, 11],
	AS: [1, 11],
	AD: [1, 11],
	AC: [1, 11],
}
