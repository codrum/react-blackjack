import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { Card } from './Card'
import { Deck } from '../types/Deck'
import { Hand } from '../types/Hand'
import { computeValueOfHand } from '../logic/makeHand'

export const HandView: FC<{ hand: Hand; deck: Deck }> = ({ hand, deck }) => {
	// Force rerender component
	const [, updateState] = useState()
	const forceUpdate = useCallback(() => updateState({}), [])
	// const [handValue, setHandValue] = useState(computeValueOfHand(hand.cards))
	const handValue = useMemo(
		() => computeValueOfHand(hand.cards),
		[hand.cards]
	)

	return (
		<>
			<button
				onClick={() => {
					hand.draw(deck)
					forceUpdate()
				}}
			>
				HIT ME!
			</button>
			<div>
				<p>
					{handValue[0]},{handValue[1]}
				</p>
			</div>
			<span>
				{hand.cards.map((cardID) => (
					<Card cardID={cardID} key={cardID}></Card>
				))}
			</span>
		</>
	)
}
