import { collect } from '../treasureController';
import { Treasure } from '../../models/treasure';

var testTreasure: Treasure;

beforeEach(() => {
    testTreasure = new Treasure(0, 0, 2);
});

test('collect 1 treasure', () => {
    collect(testTreasure);
    expect(testTreasure.amount).toBe(1);
});

test('collect too much treasures', () => {
    collect(testTreasure);
    collect(testTreasure);
    collect(testTreasure);
    expect(testTreasure.amount).toBe(0);
});