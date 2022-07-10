import { FC, useMemo } from 'react'
import { computeValueOfHand } from "../logic/computeValueOfHand"
import { Hand } from '../types/Hand'
import { Card } from './Card'

export const HandView: FC<{ hand: Hand; handleOnHit: () => void }> = ({ hand, handleOnHit }) => {
	const [lowHandValue, highHandValue] = useMemo(
		() => computeValueOfHand(hand),
		[hand]
	)

	return (
		<>
			<button
				onClick={() => handleOnHit()}
			>
				HIT ME!
			</button>
			<div>
				<p data-testid="hand-values">
					{lowHandValue}, {highHandValue}
				</p>
			</div>
			<span>
				{hand.map((cardID) => (
					<Card cardID={cardID} key={cardID}></Card>
				))}
			</span>
		</>
	)
}
