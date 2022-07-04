import React, { FC, useEffect, useState } from 'react'
import { CardID } from '../types/Card'
import { Card } from './Card'

export type Deck = { draw: () => CardID, deal: (numberOfHands: number) => Hand[] }

export type Hand = { hand: CardID[], hit: (deck: Deck) => void }


export const makeDeck = (): Deck => {
    const cards: CardID[] = ["4D", "2H", "8C", "QS", "2S", "5H", "AH"]
    const deck: Deck = {
        draw() {
            let topCard = cards.shift()
            // console.log(topCard)
            if (topCard === undefined) {
                throw new Error('Cards are all washed up')
            }
            return topCard
        },
        deal(numberOfHands) {
            let hands: Hand[] = new Array(numberOfHands).fill(0).map(makeHand)
            for (let i = 0; i < 2; i++) {
                for (let hand of hands) {
                    hand.hit(deck)
                }
            }
            return hands
        }
    }
    return deck
}

export const makeHand = (hand: CardID[] = []): Hand => {
    // let hand: CardID[] = []
    return {
        hand,
        hit(deck) {
            // hand = [...hand, deck.draw()]
            // hand.push(deck.draw())
            return makeHand([...hand, deck.draw()])
        }
    }
}

export const HandView: FC<{ hand: Hand, onHitClicked: () => void }> = ({ hand, onHitClicked }) => {

    useEffect(() => {
        console.log(hand)
    }, [hand.hand])
    return <>
        <button onClick={onHitClicked}>HIT ME!</button>
        {hand.hand.map((cardid, i) => (<Card cardID={cardid} key={cardid}></Card>))} </>
}