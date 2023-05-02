import fs from 'fs';
import { processAdventurersMovement } from "../map/mapMovement";
import { readInput, writeOutput } from "../map/mapParser";
import { TreasureMap } from "../models/treasureMap";

test('no adventurer map file', () => {
    var inputMap: TreasureMap | null = readInput('src/testFiles/mountainsAndTreasureMap.txt');
    
    if (inputMap !== null)
    {
        processAdventurersMovement(inputMap);
        writeOutput('src/testFiles/mountainsAndTreasureMapOutput.txt', inputMap);
        expect(fs.readFileSync('src/testFiles/mountainsAndTreasureMapOutput.txt', 'utf-8')).toBe(
            'C - 3 - 4\r\nM - 1 - 1\r\nM - 1 - 2\r\nT - 0 - 1 - 2\r\nT - 3 - 1 - 1'
        );
    }
});

test('single adventurer map file', () => {
    var inputMap: TreasureMap | null = readInput('src/testFiles/singleAdventurerMap.txt');
    
    if (inputMap !== null)
    {
        processAdventurersMovement(inputMap);
        writeOutput('src/testFiles/singleAdventurerMapOutput.txt', inputMap);
        expect(fs.readFileSync('src/testFiles/singleAdventurerMapOutput.txt', 'utf-8')).toBe(
            'C - 3 - 4\r\nM - 1 - 0\r\nM - 2 - 1\r\nT - 1 - 3 - 2\r\nA - Lara - 0 - 3 - S - 3'
        );
    }
});

test('multiple adventurers map file', () => {
    var inputMap: TreasureMap | null = readInput('src/testFiles/multipleAdventurersMap.txt');
    
    if (inputMap !== null)
    {
        processAdventurersMovement(inputMap);
        writeOutput('src/testFiles/multipleAdventurersMapOutput.txt', inputMap);
        expect(fs.readFileSync('src/testFiles/multipleAdventurersMapOutput.txt', 'utf-8')).toBe(
            'C - 3 - 4\r\nM - 1 - 0\r\nM - 2 - 1\r\nT - 1 - 3 - 1\r\nA - Lara - 0 - 3 - S - 3\r\nA - Nate - 1 - 3 - S - 1'
        );
    }
});

test('treasure collect check map file', () => {
    var inputMap: TreasureMap | null = readInput('src/testFiles/tooMuchTreasureMap.txt');
    
    if (inputMap !== null)
    {
        processAdventurersMovement(inputMap);
        writeOutput('src/testFiles/tooMuchTreasureMapOutput.txt', inputMap);
        expect(fs.readFileSync('src/testFiles/tooMuchTreasureMapOutput.txt', 'utf-8')).toBe(
            'C - 3 - 4\r\nA - Lara - 0 - 1 - O - 1'
        );
    }
});