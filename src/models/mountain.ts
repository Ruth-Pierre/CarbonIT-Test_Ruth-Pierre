// The mountain class, manages its position
export class Mountain
{
    private _posX: number = 0;
    private _posY: number = 0;

    constructor(posX: number, posY: number)
    {
        this._posX = posX;
        this._posY = posY;
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
}