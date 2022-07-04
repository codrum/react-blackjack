import Image from "next/image";
import React, { FC } from "react";
import { CardID, CardProps } from "../types/Card";

export const Card: FC<CardProps> = ({ cardID }) => {
    return <Image src={`/cards/${cardID}.svg`} width={240} height={336} />
}