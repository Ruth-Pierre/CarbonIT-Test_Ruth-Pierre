import { Adventurer } from "./adventurer";

var testAdventurer: Adventurer;

beforeEach(() => {
    testAdventurer = new Adventurer(1, 1, 'S', '', 'Lara');
});

test('advance adventurer 1 step south', () => {
    testAdventurer.advance();
    expect(testAdventurer.posX).toBe(1);
    expect(testAdventurer.posY).toBe(2);
});

test('rotate adventurer right', () => {
    testAdventurer.rotate('D');
    expect(testAdventurer.orientation).toBe('O');
});

test('rotate adventurer left', () => {
    testAdventurer.rotate('G');
    expect(testAdventurer.orientation).toBe('E');
});

test('advance adventurer multiple steps', () => {
    testAdventurer.advance();
    testAdventurer.rotate('D');
    testAdventurer.advance();
    testAdventurer.rotate('D');
    testAdventurer.advance();
    expect(testAdventurer.posX).toBe(0);
    expect(testAdventurer.posY).toBe(1);
});