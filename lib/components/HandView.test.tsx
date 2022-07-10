import { render, screen } from '@testing-library/react';
import { HandView } from './HandView';

describe("HandView", () => {
    it("should render the hand values separated by a comma", () => {
        render(<HandView hand={[
            "2C",
            "2D",
        ]} handleOnHit={() => undefined} />)

        const computedValuesElement = screen.getByTestId("hand-values");
        const result = computedValuesElement.textContent;
        const expected = "4, 4";
        expect(result).toBe(expected)
    })    
})