"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Treasure = void 0;
// The treasure class, manages its position and the number of treasures in it
class Treasure {
    constructor(posX, posY, amount) {
        this._posX = 0;
        this._posY = 0;
        this._amount = 0;
        this._posX = posX;
        this._posY = posY;
        this._amount = amount;
    }
    // Subtract one treasure if any are left
    collect() {
        if (this._amount > 0) {
            this._amount--;
        }
    }
    get posX() {
        return this._posX;
    }
    get posY() {
        return this._posY;
    }
    get amount() {
        return this._amount;
    }
}
exports.Treasure = Treasure;
