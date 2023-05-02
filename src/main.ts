import { processAdventurersMovement } from "./map/mapMovement";
import { readInput, writeOutput } from "./map/mapParser";
import { TreasureMap } from "./mapElements/treasureMap";

var inputOutputFiles: string[] = process.argv.slice(2);

// We check that there is an input file and an output file
if (inputOutputFiles.length == 2)
{
    var inputMap: TreasureMap | null = readInput(inputOutputFiles[0]);
    
    if (inputMap != null)
    {
        processAdventurersMovement(inputMap);
        writeOutput(inputOutputFiles[1], inputMap);
    }
}