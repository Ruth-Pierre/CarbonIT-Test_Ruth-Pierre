"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mountain = void 0;
// The mountain class, manages its position
class Mountain {
    constructor(posX, posY) {
        this._posX = 0;
        this._posY = 0;
        this._posX = posX;
        this._posY = posY;
    }
    // Getters
    get posX() {
        return this._posX;
    }
    get posY() {
        return this._posY;
    }
}
exports.Mountain = Mountain;
