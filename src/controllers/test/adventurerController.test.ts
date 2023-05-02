import { advance, rotate } from "../adventurerController";
import { Adventurer } from "../../models/adventurer";

var testAdventurer: Adventurer;

beforeEach(() => {
    testAdventurer = new Adventurer(1, 1, 'S', '', 'Lara');
});

test('advance adventurer 1 step south', () => {
    advance(testAdventurer);
    expect(testAdventurer.posX).toBe(1);
    expect(testAdventurer.posY).toBe(2);
});

test('rotate adventurer right', () => {
    rotate(testAdventurer, 'D');
    expect(testAdventurer.orientationRef[testAdventurer.orientation]).toBe('O');
});

test('rotate adventurer left', () => {
    rotate(testAdventurer, 'G');
    expect(testAdventurer.orientationRef[testAdventurer.orientation]).toBe('E');
});

test('advance adventurer multiple steps', () => {
    advance(testAdventurer);
    rotate(testAdventurer, 'D');
    advance(testAdventurer);
    rotate(testAdventurer, 'D');
    advance(testAdventurer);
    expect(testAdventurer.posX).toBe(0);
    expect(testAdventurer.posY).toBe(1);
});