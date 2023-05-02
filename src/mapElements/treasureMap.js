"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasureMap = void 0;
// The treasure map class, contains all the mountains, treasures and adventurers
class TreasureMap {
    constructor(width, height) {
        this._width = 0;
        this._height = 0;
        this._mountainList = [];
        this._treasureList = [];
        this._adventurerList = [];
        this._width = width;
        this._height = height;
    }
    addMountain(mountain) {
        this._mountainList.push(mountain);
    }
    addTreasure(treasure) {
        this._treasureList.push(treasure);
    }
    addAdventurer(adventurer) {
        this._adventurerList.push(adventurer);
    }
    // Getters
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    get mountainList() {
        return this._mountainList;
    }
    get treasureList() {
        return this._treasureList;
    }
    get adventurerList() {
        return this._adventurerList;
    }
}
exports.TreasureMap = TreasureMap;
