import { Treasure } from "../models/treasure";

// Subtract one treasure if any are left
export function collect(treasure: Treasure)
{
    if (treasure.amount > 0)
    {
        treasure.amount--;
    }
}