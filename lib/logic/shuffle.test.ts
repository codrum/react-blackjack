import { shuffle } from "./shuffle";
import { Deck } from '../types/Deck'
import { allCards } from "../types/Card";

describe("shuffle", () => {
    it("should shuffle a deck and be different than initial deck", () => {
        for (let i = 0; i < 10; i++) {
            const initial = Object.keys(allCards) as Deck
            const result = shuffle(initial)
            expect(result).not.toStrictEqual(initial)
        }
    });
})