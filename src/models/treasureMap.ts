import { Mountain } from "./mountain";
import { Treasure } from "./treasure";
import { Adventurer } from "./adventurer";

// The treasure map class, contains all the mountains, treasures and adventurers
export class TreasureMap
{
    private _width: number = 0;
    private _height: number = 0;
    private _mountainList: Mountain[] = [];
    private _treasureList: Treasure[] = [];
    private _adventurerList: Adventurer[] = [];

    constructor(width: number, height: number)
    {
        this._width = width;
        this._height = height;
    }

    // Getters
    public get width()
    {
        return this._width;
    }

    public get height()
    {
        return this._height;
    }

    public get mountainList()
    {
        return this._mountainList;
    }

    public get treasureList()
    {
        return this._treasureList;
    }

    public get adventurerList()
    {
        return this._adventurerList;
    }
}