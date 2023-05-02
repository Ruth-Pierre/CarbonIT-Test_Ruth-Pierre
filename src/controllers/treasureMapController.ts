import { Adventurer } from "../models/adventurer";
import { Mountain } from "../models/mountain";
import { Treasure } from "../models/treasure";
import { TreasureMap } from "../models/treasureMap";

export function addMountain(treasureMap: TreasureMap, mountain: Mountain)
{
    treasureMap.mountainList.push(mountain);
}

export function addTreasure(treasureMap: TreasureMap, treasure: Treasure)
{
    treasureMap.treasureList.push(treasure);
}

export function addAdventurer(treasureMap: TreasureMap, adventurer: Adventurer)
{
    treasureMap.adventurerList.push(adventurer);
}