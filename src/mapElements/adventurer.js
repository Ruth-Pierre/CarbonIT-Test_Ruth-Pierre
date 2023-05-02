"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adventurer = void 0;
// The adventurer class, manages its position, orientation, name, list of movements and number of treasures collected
class Adventurer {
    constructor(posX, posY, orientation, movesList, name) {
        this._orientationRef = ['S', 'O', 'N', 'E'];
        this._advanceOnXRef = [0, -1, 0, 1];
        this._advanceOnYRef = [1, 0, -1, 0];
        this._previousPosX = 0;
        this._previousPosY = 0;
        this._posX = 0;
        this._posY = 0;
        this._orientationIndex = 0;
        this._orientation = 'S';
        this._movesList = '';
        this._name = '';
        this._treasureCollected = 0;
        this._posX = posX;
        this._posY = posY;
        this._orientation = orientation;
        // We set the orientation index
        this._orientationIndex = this._orientationRef.indexOf(orientation);
        this._movesList = movesList;
        this._name = name;
    }
    // Run one turn of movement for this adventurer
    runMovement(turn) {
        if (turn < this._movesList.length) {
            let moveCode = this._movesList.charAt(turn);
            if (moveCode == 'A') {
                this.advance();
            }
            else if (moveCode == 'G' || moveCode == 'D') {
                this.rotate(moveCode);
            }
            else {
                console.log('Unknown move code : ' + moveCode);
            }
        }
    }
    // Move the adventurer forward once, according to his orientation
    advance() {
        // Sets up the previous position of the adventurer, in case we need to cancel the move
        this._previousPosX = this._posX;
        this._previousPosY = this._posY;
        this._posX += this._advanceOnXRef[this._orientationIndex];
        this._posY += this._advanceOnYRef[this._orientationIndex];
    }
    // Rewinds the adventurer's position
    cancelPreviousMove() {
        this._posX = this._previousPosX;
        this._posY = this._previousPosY;
    }
    // Changes the orientation of the adventurer
    rotate(direction) {
        this._orientationIndex += direction == 'D' ? 1 : -1;
        if (this._orientationIndex < 0) {
            this._orientationIndex = this._orientationRef.length - 1;
        }
        if (this._orientationIndex >= this._orientationRef.length) {
            this._orientationIndex = 0;
        }
        this._orientation = this._orientationRef[this._orientationIndex];
    }
    // Adds one treasure to the aventurer's collection
    addTreasure() {
        this._treasureCollected++;
    }
    // Getters
    get posX() {
        return this._posX;
    }
    get posY() {
        return this._posY;
    }
    get orientation() {
        return this._orientation;
    }
    get name() {
        return this._name;
    }
    get movesList() {
        return this._movesList;
    }
    get treasureCollected() {
        return this._treasureCollected;
    }
}
exports.Adventurer = Adventurer;
