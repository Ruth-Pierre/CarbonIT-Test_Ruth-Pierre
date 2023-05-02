enum Orientation
{
    S = 0,
    O = 1,
    N = 2,
    E = 3,
}

export type Movement = 'A' | 'G' | 'D';

// The adventurer class, manages its position, orientation, name, list of movements and number of treasures collected
export class Adventurer
{
    private readonly _orientationRef: string[] = ['S', 'O', 'N', 'E']
    private readonly _advanceOnXRef: number[] = [0, -1, 0, 1];
    private readonly _advanceOnYRef: number[] = [1, 0, -1, 0];

    private _previousPosX: number = 0;
    private _previousPosY: number = 0;
    private _posX: number = 0;
    private _posY: number = 0;

    // private _orientationIndex: number = 0;
    private _orientation: Orientation = Orientation.S;
    private _movesList: Movement[] = [];
    private _name: string = '';

    private _treasureCollected: number = 0;

    constructor(posX: number, posY: number, orientation: string, movesList: string, name: string)
    {
        this._posX = posX;
        this._posY = posY;

        switch (orientation)
        {
            case 'S':
                this._orientation = Orientation.S;
                break;

            case 'O':
                this._orientation = Orientation.O;
                break;

            case 'N':
                this._orientation = Orientation.N;
                break;

            case 'E':
                this._orientation = Orientation.E;
                break;

            default:
                console.log('Unknown orientation');
                break;
        }

        movesList.split('').forEach(move => {
            switch (move)
            {
                case 'A':
                    this._movesList.push('A');
                    break;

                case 'G':
                    this._movesList.push('G');
                    break;

                case 'D':
                    this._movesList.push('D');
                    break;

                default:
                    console.log('Unknown move');
                    break;
            }
        });

        this._name = name;
    }

    // Getters Setters
    public get previousPosX()
    {
        return this._previousPosX;
    }

    public set previousPosX(value: number)
    {
        this._previousPosX = value;
    }

    public get previousPosY()
    {
        return this._previousPosY;
    }

    public set previousPosY(value: number)
    {
        this._previousPosY = value;
    }

    public get posX()
    {
        return this._posX;
    }

    public set posX(value: number)
    {
        this._posX = value;
    }

    public get posY()
    {
        return this._posY;
    }

    public set posY(value: number)
    {
        this._posY = value;
    }

    public get orientation()
    {
        return this._orientation;
    }

    public set orientation(value: number)
    {
        this._orientation = value;
    }

    public get name()
    {
        return this._name;
    }

    public get movesList()
    {
        return this._movesList;
    }

    public get treasureCollected()
    {
        return this._treasureCollected;
    }

    public set treasureCollected(value: number)
    {
        this._treasureCollected = value;
    }

    public get orientationRef()
    {
        return this._orientationRef;
    }

    public get advanceOnXRef()
    {
        return this._advanceOnXRef;
    }

    public get advanceOnYRef()
    {
        return this._advanceOnYRef;
    }
}