"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapMovement_1 = require("./map/mapMovement");
const mapParser_1 = require("./map/mapParser");
var inputOutputFiles = process.argv.slice(2);
// We check that there is an input file and an output file
if (inputOutputFiles.length == 2) {
    var inputMap = (0, mapParser_1.readInput)(inputOutputFiles[0]);
    if (inputMap != null) {
        (0, mapMovement_1.processAdventurersMovement)(inputMap);
        (0, mapParser_1.writeOutput)(inputOutputFiles[1], inputMap);
    }
}
