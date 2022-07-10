import { Deck } from "../types/Deck";
import { deal } from "./deal";

describe("deal", () => {
    it("should remove top card and add it to hand", () => {
        const inputDeck: Deck = ["2C", "2D"];
        
        const result: ReturnType<typeof deal> = deal({
            cardsPerHand: 1,
            deck: inputDeck,
            numberOfHands: 2,
        });

        const expected: ReturnType<typeof deal> = {
            deck: [],
            hands: [
                ["2C"],
                ["2D"],
            ],
        };

        expect(result).toStrictEqual(expected);
    });
})