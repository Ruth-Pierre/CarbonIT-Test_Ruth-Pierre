"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processAdventurersMovement = void 0;
// Manages all the adventurers' movement one by one, turn by turn
function processAdventurersMovement(map) {
    let turn = 0;
    let allMovesDone = false;
    while (!allMovesDone) {
        allMovesDone = true;
        map.adventurerList.forEach(adventurer => {
            processSingleMovement(adventurer, turn, map);
            allMovesDone = allMovesDone && (adventurer.movesList.length <= turn - 1);
        });
        turn++;
    }
}
exports.processAdventurersMovement = processAdventurersMovement;
// Manages one turn of movement for a single adventurer
function processSingleMovement(adventurer, turn, map) {
    let previousPosX = adventurer.posX;
    let previousPosY = adventurer.posY;
    adventurer.runMovement(turn);
    // We check if the movement was a rotation
    if (previousPosX == adventurer.posX && previousPosY == adventurer.posY) {
        return;
    }
    // Check if the movement is legal or if the adventurer is on a treasure
    // Map bounds check
    if (adventurer.posX < 0 || adventurer.posX >= map.width || adventurer.posY < 0 || adventurer.posY >= map.height) {
        adventurer.cancelPreviousMove();
        return;
    }
    // Mountains check
    for (let i = 0; i < map.mountainList.length; i++) {
        const mountain = map.mountainList[i];
        if (mountain.posX == adventurer.posX && mountain.posY == adventurer.posY) {
            adventurer.cancelPreviousMove();
            return;
        }
    }
    // Other adventurers check
    for (let i = 0; i < map.adventurerList.length; i++) {
        const compAdventurer = map.adventurerList[i];
        if (compAdventurer != adventurer && compAdventurer.posX == adventurer.posX && compAdventurer.posY == adventurer.posY) {
            adventurer.cancelPreviousMove();
            return;
        }
    }
    // Treasure check
    map.treasureList.forEach(treasure => {
        if (treasure.amount > 0 && treasure.posX == adventurer.posX && treasure.posY == adventurer.posY) {
            treasure.collect();
            adventurer.addTreasure();
        }
    });
}
