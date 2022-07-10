import { draw } from "./draw";

describe("draw", () => {
    it("should remove top card and add it to hand", () => {
        const result: ReturnType<typeof draw> = draw({
            deck: ['2C', "2D"], 
            hand: [],
        });

        const expected: ReturnType<typeof draw> = {
            newDeck: [
                '2D'
            ],
            newHand: [
                "2C"
            ]
        };

        expect(result).toStrictEqual(expected);
    });
})