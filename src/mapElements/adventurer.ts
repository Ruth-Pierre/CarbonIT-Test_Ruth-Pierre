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

    private _orientationIndex: number = 0;
    private _orientation: string = 'S';
    private _movesList: string = '';
    private _name: string = '';

    private _treasureCollected: number = 0;

    constructor(posX: number, posY: number, orientation: string, movesList: string, name: string)
    {
        this._posX = posX;
        this._posY = posY;
        this._orientation = orientation;

        // We set the orientation index
        this._orientationIndex = this._orientationRef.indexOf(orientation);

        this._movesList = movesList;
        this._name = name;
    }

    // Run one turn of movement for this adventurer
    public runMovement(turn: number)
    {
        if (turn < this._movesList.length)
        {
            let moveCode: string = this._movesList.charAt(turn);

            if (moveCode == 'A')
            {
                this.advance();
            }
            else if (moveCode == 'G' || moveCode == 'D')
            {
                this.rotate(moveCode);
            }
            else
            {
                console.log('Unknown move code : ' + moveCode);
            }
        }
    }

    // Move the adventurer forward once, according to his orientation
    public advance()
    {
        // Sets up the previous position of the adventurer, in case we need to cancel the move
        this._previousPosX = this._posX;
        this._previousPosY = this._posY;

        this._posX += this._advanceOnXRef[this._orientationIndex];
        this._posY += this._advanceOnYRef[this._orientationIndex];
    }

    // Rewinds the adventurer's position
    public cancelPreviousMove()
    {
        this._posX = this._previousPosX;
        this._posY = this._previousPosY;
    }

    // Changes the orientation of the adventurer
    public rotate(direction: string)
    {
        this._orientationIndex += direction == 'D' ? 1 : -1;

        if (this._orientationIndex < 0)
        {
            this._orientationIndex = this._orientationRef.length - 1;
        }

        if (this._orientationIndex >= this._orientationRef.length)
        {
            this._orientationIndex = 0;
        }

        this._orientation = this._orientationRef[this._orientationIndex];
    }

    // Adds one treasure to the aventurer's collection
    public addTreasure()
    {
        this._treasureCollected++;
    }

    // Getters
    public get posX()
    {
        return this._posX;
    }

    public get posY()
    {
        return this._posY;
    }

    public get orientation()
    {
        return this._orientation;
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
}