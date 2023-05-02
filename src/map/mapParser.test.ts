import fs from 'fs';
import { Adventurer } from "../mapElements/adventurer";
import { Mountain } from "../mapElements/mountain";
import { Treasure } from "../mapElements/treasure";
import { TreasureMap } from "../mapElements/treasureMap";
import { readInput, writeOutput } from "./mapParser";

test('read simple file', () => {
    var map: TreasureMap | null = readInput('src/testFiles/simpleMap.txt');
    expect(map).toEqual(new TreasureMap(3, 4));
});

test('read mountains and treasures file', () => {
    var map: TreasureMap | null = readInput('src/testFiles/mountainsAndTreasureMap.txt');
    var comparisonMap = new TreasureMap(3, 4);
    comparisonMap.addMountain(new Mountain(1, 1));
    comparisonMap.addMountain(new Mountain(1, 2));
    comparisonMap.addTreasure(new Treasure(0, 1, 2));
    comparisonMap.addTreasure(new Treasure(3, 1, 1));
    expect(map).toEqual(comparisonMap);
});

test('read 1 adventurer file', () => {
    var map: TreasureMap | null = readInput('src/testFiles/adventurerMap.txt');
    var comparisonMap = new TreasureMap(3, 4);
    comparisonMap.addMountain(new Mountain(1, 1));
    comparisonMap.addMountain(new Mountain(1, 2));
    comparisonMap.addTreasure(new Treasure(0, 1, 2));
    comparisonMap.addTreasure(new Treasure(3, 1, 1));
    comparisonMap.addAdventurer(new Adventurer(2, 2, 'S', 'AADAADAA', 'Nate'));
    expect(map).toEqual(comparisonMap);
});

test('write file without movements', () => {
    var map = new TreasureMap(3, 4);
    map.addMountain(new Mountain(1, 1));
    map.addMountain(new Mountain(1, 2));
    map.addTreasure(new Treasure(0, 1, 2));
    map.addTreasure(new Treasure(3, 1, 1));
    map.addAdventurer(new Adventurer(2, 2, 'S', 'AADAADAA', 'Nate'));
    writeOutput('src/testFiles/noMovementOutput.txt', map);
    expect(fs.readFileSync('src/testFiles/noMovementOutput.txt', 'utf-8')).toBe(
        'C - 3 - 4\r\nM - 1 - 1\r\nM - 1 - 2\r\nT - 0 - 1 - 2\r\nT - 3 - 1 - 1\r\nA - Nate - 2 - 2 - S - 0'
    );
});