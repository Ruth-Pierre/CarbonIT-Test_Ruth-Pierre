// The treasure class, manages its position and the number of treasures in it
export class Treasure
{
    private _posX: number = 0;
    private _posY: number = 0;
    private _amount: number = 0;

    constructor(posX: number, posY: number, amount: number)
    {
        this._posX = posX;
        this._posY = posY;
        this._amount = amount;
    }

    public get posX()
    {
        return this._posX;
    }

    public get posY()
    {
        return this._posY;
    }

    public get amount()
    {
        return this._amount;
    }

    public set amount(value: number)
    {
        this._amount = value;
    }
}