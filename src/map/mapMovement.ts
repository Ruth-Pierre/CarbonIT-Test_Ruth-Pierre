import { addTreasure, cancelPreviousMove, runMovement } from "../controllers/adventurerController";
import { collect } from "../controllers/treasureController";
import { Adventurer } from "../models/adventurer";
import { TreasureMap } from "../models/treasureMap";

// Manages all the adventurers' movement one by one, turn by turn
export function processAdventurersMovement(map: TreasureMap)
{
    let turn: number = 0;
    let allMovesDone: Boolean = false;

    while (!allMovesDone)
    {
        allMovesDone = true;

        map.adventurerList.forEach(adventurer => {
            processSingleMovement(adventurer, turn, map);
            allMovesDone = allMovesDone && (adventurer.movesList.length <= turn - 1);
        });

        turn++;
    }
}

// Manages one turn of movement for a single adventurer
function processSingleMovement(adventurer: Adventurer, turn: number, map: TreasureMap)
{
    let previousPosX: number = adventurer.posX;
    let previousPosY: number = adventurer.posY;

    runMovement(adventurer, turn);

    // We check if the movement was a rotation
    if (previousPosX === adventurer.posX && previousPosY === adventurer.posY)
    {
        return;
    }

    // Check if the movement is legal or if the adventurer is on a treasure
    // Map bounds check
    if (adventurer.posX < 0 || adventurer.posX >= map.width || adventurer.posY < 0 || adventurer.posY >= map.height)
    {
        cancelPreviousMove(adventurer);
        return;
    }

    // Mountains check
    if (mountainsCheck(map, adventurer))
    {
        return;
    }

    // Other adventurers check
    if (adventurerCheck(map, adventurer))
    {
        return;
    }

    // Treasure check
    treasureCheck(map, adventurer);
}

function mountainsCheck(map: TreasureMap, adventurer: Adventurer): boolean
{
    for (let i = 0; i < map.mountainList.length; i++)
    {
        const mountain = map.mountainList[i];

        if (mountain.posX === adventurer.posX && mountain.posY === adventurer.posY)
        {
            cancelPreviousMove(adventurer);
            return true;
        }
    }

    return false;
}

function adventurerCheck(map: TreasureMap, adventurer: Adventurer): boolean
{
    for (let i = 0; i < map.adventurerList.length; i++)
    {
        const compAdventurer = map.adventurerList[i];
        
        if (compAdventurer !== adventurer && compAdventurer.posX === adventurer.posX && compAdventurer.posY === adventurer.posY)
        {
            cancelPreviousMove(adventurer);
            return true;
        }
    }

    return false;
}

function treasureCheck(map: TreasureMap, adventurer: Adventurer)
{
    map.treasureList.forEach(treasure => {
        if (treasure.amount > 0 && treasure.posX === adventurer.posX && treasure.posY === adventurer.posY)
        {
            collect(treasure);
            addTreasure(adventurer);
        }
    });
}