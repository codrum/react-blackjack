import { Face, FaceID } from "./Face"
import { Suit, SuitID } from "./Suit"

export type CardProps = { cardID: CardID }

export type CardID = `${FaceID}${SuitID}` | '1B' | '2B'