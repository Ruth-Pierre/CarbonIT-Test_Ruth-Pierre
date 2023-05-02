import fs from 'fs';
import { TreasureMap } from "../mapElements/treasureMap";
import { Mountain } from '../mapElements/mountain';
import { Treasure } from '../mapElements/treasure';
import { Adventurer } from '../mapElements/adventurer';

// Reads a text file and builds a TreasureMap object out of it
export function readInput(filePath: string): TreasureMap | null
{
    let map: TreasureMap | null = null;
    let words: string = '';
    
    try
    {
        words = fs.readFileSync(filePath, 'utf-8');
    }
    catch (err: any)
    {
        if (err.code === 'ENOENT')
        {
            console.log('Input file not found !');
            return null;
        }
        else
        {
            throw err;
        }
    }

    const wordList: string[] = words.split(/[\r\n]+/);

    wordList.forEach((line, index) => {
        let splitLine: string[] = line.split(' - ');

        switch (splitLine[0]) {
            case 'C':
                if (index != 0 || splitLine.length != 3)
                {
                    return null;
                }
                else
                {
                    map = new TreasureMap(Number.parseInt(splitLine[1]), Number.parseInt(splitLine[2]));
                }
                break;

            case 'M':
                if (index != 0 && splitLine.length == 3 && map != null)
                {
                    map.addMountain(new Mountain(Number.parseInt(splitLine[1]), Number.parseInt(splitLine[2])));
                }
                break;

            case 'T':
                if (index != 0 && splitLine.length == 4 && map != null)
                {
                    map.addTreasure(new Treasure(Number.parseInt(splitLine[1]), Number.parseInt(splitLine[2]), Number.parseInt(splitLine[3])));
                }
                break;

            case 'A':
                if (index != 0 && splitLine.length == 6 && map != null)
                {
                    map.addAdventurer(new Adventurer(Number.parseInt(splitLine[2]), Number.parseInt(splitLine[3]), splitLine[4], splitLine[5], splitLine[1]))
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

// Creates a text file from a TreasureMap object
export function writeOutput(filePath: string, map: TreasureMap)
{
    let fileData: string = '';

    fileData += `C - ${map.width} - ${map.height}`;

    map.mountainList.forEach(mountain => {
        fileData += `\r\nM - ${mountain.posX} - ${mountain.posY}`;
    });

    map.treasureList.forEach(treasure => {
        if (treasure.amount > 0)
        {
            fileData += `\r\nT - ${treasure.posX} - ${treasure.posY} - ${treasure.amount}`;
        }
    });

    map.adventurerList.forEach(adventurer => {
        fileData += `\r\nA - ${adventurer.name} - ${adventurer.posX} - ${adventurer.posY} - ${adventurer.orientation} - ${adventurer.treasureCollected}`;
    });

    fs.writeFileSync(filePath, fileData);
}