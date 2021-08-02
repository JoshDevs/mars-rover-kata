import { marsRover } from '../app';

describe('mars rover', () => {
    /// first test to check that method exists
    test('exists', () => {
        expect(marsRover).toBeDefined();
    });

    /// then check that a string is returned
    test('returns error string', () => {
        expect(marsRover('', '', '')).toBe('Fatal Error: Check Input');
    });

    /// test for right turning logic

    test.each([
        ['R' , '0 0 E'],
        ['RR', '0 0 S'],
        ['RRR', '0 0 W'],
        ['RRRR', '0 0 N']
    ])('returns correct coordinates with %s as instructions', (instructions: string, expected: string) => {
        expect(marsRover( '5 5', '0 0 N', instructions)).toBe(expected);
    });

    /// refactor for DRY principle then...

    /// test for left turn logic
    test.each([
        ['L' , '0 0 W'],
        ['LL', '0 0 S'],
        ['LLL', '0 0 E'],
        ['LLLL', '0 0 N']
    ])('returns correct coordinates with %s as instructions', (instructions: string, expected: string) => {
        expect(marsRover( '5 5', '0 0 N', instructions)).toBe(expected);
    });

    /// test for moving logic
    test.each([
        ['1 1 N' , '1 2 N'],
        ['1 1 S', '1 0 S'],
        ['1 1 E', '2 1 E'],
        ['1 1 W', '0 1 W']
    ])('returns correct coordinates when moving', (position: string, expected: string) => {
        expect(marsRover( '5 5', position, 'M')).toBe(expected);
    });

    /// test size logic
    test.each([
        ['5 5', '5 5 N'],
        ['5 5', '5 5 E'],
        ['0 0', '0 0 S'],
        ['0 0', '0 0 W'],
    ])('returns error message if rover out of bounds', (size: string, position: string) => {
        expect(marsRover(size, position, 'M')).toBe('Fatal Error: Check Input');
    });

    /// test final implementation (complex case)
    describe.each(['5 5'])('Test input of size %s', (size: string) => {
        test.each([
            ['1 2 N', 'LMLMLMLMM', '1 3 N'],
            ['3 3 E', 'MMRMMRMRRM', '5 1 E']
        ])('position %s and instructions %s returns coordinates %s', (position: string, instructions: string, expected: string) => {
            expect(marsRover(size, position, instructions)).toBe(expected);
        });
    });
});
