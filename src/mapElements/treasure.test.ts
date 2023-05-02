import { Treasure } from './treasure';

var testTreasure: Treasure;

beforeEach(() => {
    testTreasure = new Treasure(0, 0, 2);
});

test('collect 1 treasure', () => {
    testTreasure.collect();
    expect(testTreasure.amount).toBe(1);
});

test('collect too much treasures', () => {
    testTreasure.collect();
    testTreasure.collect();
    testTreasure.collect();
    expect(testTreasure.amount).toBe(0);
});