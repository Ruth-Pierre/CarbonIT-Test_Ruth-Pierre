import { Adventurer } from "../mapElements/adventurer";
import { TreasureMap } from "../mapElements/treasureMap";

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

    adventurer.runMovement(turn);

    // We check if the movement was a rotation
    if (previousPosX == adventurer.posX && previousPosY == adventurer.posY)
    {
        return;
    }

    // Check if the movement is legal or if the adventurer is on a treasure
    // Map bounds check
    if (adventurer.posX < 0 || adventurer.posX >= map.width || adventurer.posY < 0 || adventurer.posY >= map.height)
    {
        adventurer.cancelPreviousMove();
        return;
    }

    // Mountains check
    for (let i = 0; i < map.mountainList.length; i++)
    {
        const mountain = map.mountainList[i];

        if (mountain.posX == adventurer.posX && mountain.posY == adventurer.posY)
        {
            adventurer.cancelPreviousMove();
            return;
        }
    }

    // Other adventurers check
    for (let i = 0; i < map.adventurerList.length; i++)
    {
        const compAdventurer = map.adventurerList[i];
        
        if (compAdventurer != adventurer && compAdventurer.posX == adventurer.posX && compAdventurer.posY == adventurer.posY)
        {
            adventurer.cancelPreviousMove();
            return;
        }
    }

    // Treasure check
    map.treasureList.forEach(treasure => {
        if (treasure.amount > 0 && treasure.posX == adventurer.posX && treasure.posY == adventurer.posY)
        {
            treasure.collect();
            adventurer.addTreasure();
        }
    });
}