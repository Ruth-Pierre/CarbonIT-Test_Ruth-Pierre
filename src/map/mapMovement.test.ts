import { Adventurer } from "../mapElements/adventurer";
import { Mountain } from "../mapElements/mountain";
import { Treasure } from "../mapElements/treasure";
import { TreasureMap } from "../mapElements/treasureMap";
import { processAdventurersMovement } from "./mapMovement";

test('simple movement', () => {
    var map = new TreasureMap(3, 4);
    map.addAdventurer(new Adventurer(1, 1, 'S', 'AGADA', 'John'));
    processAdventurersMovement(map);
    expect(map.adventurerList[0].posX).toBe(2);
    expect(map.adventurerList[0].posY).toBe(3);
});

test('out of bounds movement', () => {
    var map = new TreasureMap(3, 4);
    map.addAdventurer(new Adventurer(1, 1, 'S', 'AAAAAAA', 'John'));
    processAdventurersMovement(map);
    expect(map.adventurerList[0].posX).toBe(1);
    expect(map.adventurerList[0].posY).toBe(3);
});

test('mountains movement', () => {
    var map = new TreasureMap(3, 4);
    map.addMountain(new Mountain(0, 0));
    map.addMountain(new Mountain(2, 2));
    map.addAdventurer(new Adventurer(1, 1, 'S', 'AGADA', 'John'));
    processAdventurersMovement(map);
    expect(map.adventurerList[0].posX).toBe(1);
    expect(map.adventurerList[0].posY).toBe(3);
});

test('treasure movement', () => {
    var map = new TreasureMap(3, 4);
    map.addTreasure(new Treasure(2, 2, 2));
    map.addAdventurer(new Adventurer(1, 1, 'S', 'AGADA', 'John'));
    processAdventurersMovement(map);
    expect(map.adventurerList[0].posX).toBe(2);
    expect(map.adventurerList[0].posY).toBe(3);
    expect(map.treasureList[0].amount).toBe(1);
});