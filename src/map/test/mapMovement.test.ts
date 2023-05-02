import { addAdventurer, addMountain, addTreasure } from "../../controllers/treasureMapController";
import { Adventurer } from "../../models/adventurer";
import { Mountain } from "../../models/mountain";
import { Treasure } from "../../models/treasure";
import { TreasureMap } from "../../models/treasureMap";
import { processAdventurersMovement } from "../mapMovement";

test('simple movement', () => {
    var map = new TreasureMap(3, 4);
    addAdventurer(map, new Adventurer(1, 1, 'S', 'AGADA', 'John'));
    processAdventurersMovement(map);
    expect(map.adventurerList[0].posX).toBe(2);
    expect(map.adventurerList[0].posY).toBe(3);
});

test('out of bounds movement', () => {
    var map = new TreasureMap(3, 4);
    addAdventurer(map, new Adventurer(1, 1, 'S', 'AAAAAAA', 'John'));
    processAdventurersMovement(map);
    expect(map.adventurerList[0].posX).toBe(1);
    expect(map.adventurerList[0].posY).toBe(3);
});

test('mountains movement', () => {
    var map = new TreasureMap(3, 4);
    addMountain(map, new Mountain(0, 0));
    addMountain(map, new Mountain(2, 2));
    addAdventurer(map, new Adventurer(1, 1, 'S', 'AGADA', 'John'));
    processAdventurersMovement(map);
    expect(map.adventurerList[0].posX).toBe(1);
    expect(map.adventurerList[0].posY).toBe(3);
});

test('treasure movement', () => {
    var map = new TreasureMap(3, 4);
    addTreasure(map, new Treasure(2, 2, 2));
    addAdventurer(map, new Adventurer(1, 1, 'S', 'AGADA', 'John'));
    processAdventurersMovement(map);
    expect(map.adventurerList[0].posX).toBe(2);
    expect(map.adventurerList[0].posY).toBe(3);
    expect(map.treasureList[0].amount).toBe(1);
});