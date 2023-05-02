import fs from 'fs';
import { Adventurer } from "../../models/adventurer";
import { Mountain } from "../../models/mountain";
import { Treasure } from "../../models/treasure";
import { TreasureMap } from "../../models/treasureMap";
import { readInput, writeOutput } from "../mapParser";
import { addAdventurer, addMountain, addTreasure } from '../../controllers/treasureMapController';

test('read simple file', () => {
    var map: TreasureMap | null = readInput('src/testFiles/simpleMap.txt');
    expect(map).toEqual(new TreasureMap(3, 4));
});

test('read mountains and treasures file', () => {
    var map: TreasureMap | null = readInput('src/testFiles/mountainsAndTreasureMap.txt');
    var comparisonMap = new TreasureMap(3, 4);
    addMountain(comparisonMap, new Mountain(1, 1));
    addMountain(comparisonMap, new Mountain(1, 2));
    addTreasure(comparisonMap, new Treasure(0, 1, 2));
    addTreasure(comparisonMap, new Treasure(3, 1, 1));
    expect(map).toEqual(comparisonMap);
});

test('read 1 adventurer file', () => {
    var map: TreasureMap | null = readInput('src/testFiles/adventurerMap.txt');
    var comparisonMap = new TreasureMap(3, 4);
    addMountain(comparisonMap, new Mountain(1, 1));
    addMountain(comparisonMap, new Mountain(1, 2));
    addTreasure(comparisonMap, new Treasure(0, 1, 2));
    addTreasure(comparisonMap, new Treasure(3, 1, 1));
    addAdventurer(comparisonMap, new Adventurer(2, 2, 'S', 'AADAADAA', 'Nate'));
    expect(map).toEqual(comparisonMap);
});

test('write file without movements', () => {
    var map = new TreasureMap(3, 4);
    addMountain(map, new Mountain(1, 1));
    addMountain(map, new Mountain(1, 2));
    addTreasure(map, new Treasure(0, 1, 2));
    addTreasure(map, new Treasure(3, 1, 1));
    addAdventurer(map, new Adventurer(2, 2, 'S', 'AADAADAA', 'Nate'));
    writeOutput('src/testFiles/noMovementOutput.txt', map);
    expect(fs.readFileSync('src/testFiles/noMovementOutput.txt', 'utf-8')).toBe(
        'C - 3 - 4\r\nM - 1 - 1\r\nM - 1 - 2\r\nT - 0 - 1 - 2\r\nT - 3 - 1 - 1\r\nA - Nate - 2 - 2 - S - 0'
    );
});