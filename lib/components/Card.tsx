import Image from 'next/image'
import React, { FC, useCallback, useState } from 'react'
import { CardID } from '../types/Card'

type CardProps = { cardID: CardID }

export const Card: FC<CardProps> = ({ cardID }) => {
	const [show, setShow] = useState(false);

	const showCard = () => setShow(true)

	if (show)
		return <Image src={`/cards/${cardID}.svg`} width={240} height={336} />

	if(/[DH]$/.test(cardID))
		return <Image src="/cards/2B.svg"  width={240} height={336} onClick={showCard} />

	return <Image src="/cards/1B.svg"  width={240} height={336} onClick={showCard} />		
}
