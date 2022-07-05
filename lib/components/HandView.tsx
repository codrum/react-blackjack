import React, { FC, useCallback, useEffect, useState } from 'react'
import { Card } from './Card'
import { Deck } from '../types/Deck'
import { Hand } from '../types/Hand'

export const HandView: FC<{ hand: Hand, deck: Deck }> = ({ hand, deck }) => {
    // Force rerender component
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    return <>
        <button onClick={() => { hand.draw(deck); forceUpdate() }}>HIT ME!</button>
        <span>
            {hand.hand.map((cardid, i) => (<Card cardID={cardid} key={cardid}></Card>))}
        </span>
    </>
}