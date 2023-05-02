"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeOutput = exports.readInput = void 0;
const fs_1 = __importDefault(require("fs"));
const treasureMap_1 = require("../mapElements/treasureMap");
const mountain_1 = require("../mapElements/mountain");
const treasure_1 = require("../mapElements/treasure");
const adventurer_1 = require("../mapElements/adventurer");
// Reads a text file and builds a TreasureMap object out of it
function readInput(filePath) {
    let map = null;
    let words = '';
    try {
        words = fs_1.default.readFileSync(filePath, 'utf-8');
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            console.log('Input file not found !');
            return null;
        }
        else {
            throw err;
        }
    }
    const wordList = words.split('\r\n');
    wordList.forEach((line, index) => {
        let splitLine = line.split(' - ');
        switch (splitLine[0]) {
            case 'C':
                if (index != 0 || splitLine.length != 3) {
                    return null;
                }
                else {
                    map = new treasureMap_1.TreasureMap(Number.parseInt(splitLine[1]), Number.parseInt(splitLine[2]));
                }
                break;
            case 'M':
                if (index != 0 && splitLine.length == 3 && map != null) {
                    map.addMountain(new mountain_1.Mountain(Number.parseInt(splitLine[1]), Number.parseInt(splitLine[2])));
                }
                break;
            case 'T':
                if (index != 0 && splitLine.length == 4 && map != null) {
                    map.addTreasure(new treasure_1.Treasure(Number.parseInt(splitLine[1]), Number.parseInt(splitLine[2]), Number.parseInt(splitLine[3])));
                }
                break;
            case 'A':
                if (index != 0 && splitLine.length == 6 && map != null) {
                    map.addAdventurer(new adventurer_1.Adventurer(Number.parseInt(splitLine[2]), Number.parseInt(splitLine[3]), splitLine[4], splitLine[5], splitLine[1]));
                }
            case '#':
                break;
            default:
                console.log('Unknown line : ' + splitLine);
                break;
        }
    });
    return map;
}
exports.readInput = readInput;
// Creates a text file from a TreasureMap object
function writeOutput(filePath, map) {
    let fileData = '';
    fileData += `C - ${map.width} - ${map.height}`;
    map.mountainList.forEach(mountain => {
        fileData += `\r\nM - ${mountain.posX} - ${mountain.posY}`;
    });
    map.treasureList.forEach(treasure => {
        if (treasure.amount > 0) {
            fileData += `\r\nT - ${treasure.posX} - ${treasure.posY} - ${treasure.amount}`;
        }
    });
    map.adventurerList.forEach(adventurer => {
        fileData += `\r\nA - ${adventurer.name} - ${adventurer.posX} - ${adventurer.posY} - ${adventurer.orientation} - ${adventurer.treasureCollected}`;
    });
    fs_1.default.writeFileSync(filePath, fileData);
}
exports.writeOutput = writeOutput;
