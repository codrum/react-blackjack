import Image from 'next/image'
import React, { FC } from 'react'
import { CardID } from '../types/Card'

type CardProps = { cardID: CardID }

export const Card: FC<CardProps> = ({ cardID }) => {
	return <Image src={`/cards/${cardID}.svg`} width={240} height={336} />
}
