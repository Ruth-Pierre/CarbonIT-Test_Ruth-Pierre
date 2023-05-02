import { Adventurer, Movement } from "../models/adventurer";

// Run one turn of movement for this adventurer
export function runMovement(adventurer: Adventurer, turn: number)
{
    if (turn < adventurer.movesList.length)
    {
        let moveCode: Movement = adventurer.movesList[turn];

        if (moveCode === 'A')
        {
            advance(adventurer);
        }
        else if (moveCode === 'G' || moveCode === 'D')
        {
            rotate(adventurer, moveCode);
        }
        else
        {
            console.log('Unknown move code : ' + moveCode);
        }
    }
}

// Move the adventurer forward once, according to his orientation
export function advance(adventurer: Adventurer)
{
    // Sets up the previous position of the adventurer, in case we need to cancel the move
    adventurer.previousPosX = adventurer.posX;
    adventurer.previousPosY = adventurer.posY;

    adventurer.posX += adventurer.advanceOnXRef[adventurer.orientation];
    adventurer.posY += adventurer.advanceOnYRef[adventurer.orientation];
}

// Rewinds the adventurer's position
export function cancelPreviousMove(adventurer: Adventurer)
{
    adventurer.posX = adventurer.previousPosX;
    adventurer.posY = adventurer.previousPosY;
}

// Changes the orientation of the adventurer
export function rotate(adventurer: Adventurer, direction: string)
{
    adventurer.orientation += direction === 'D' ? 1 : -1;

    if (adventurer.orientation < 0)
    {
        adventurer.orientation = adventurer.orientationRef.length - 1;
    }

    if (adventurer.orientation >= adventurer.orientationRef.length)
    {
        adventurer.orientation = 0;
    }
}

// Adds one treasure to the aventurer's collection
export function addTreasure(adventurer: Adventurer)
{
    adventurer.treasureCollected++;
}
