
import { config1, config2, config3 } from './puzzle'

export class MoveType {
    readonly deltar: number;
    readonly deltac: number;

    constructor(dr: number, dc: number) {
        this.deltar = dr;
        this.deltac = dc;
    }

    equals(m:MoveType) :boolean {
        return this.deltar === m.deltar && this.deltac === m.deltac
    }

    static parse(s: string): MoveType {
        if ((s === "down") || (s === "Down")) { return Down; }
        if ((s === "up") || (s === "Up")) { return Up; }
        if ((s === "left") || (s === "Left")) { return Left; }
        if ((s === "right") || (s === "Right")) { return Right; }

        return NoMove;
    }
}

export const Down = new MoveType(1, 0);
export const Up = new MoveType(-1, 0);
export const Left = new MoveType(0, -1);
export const Right = new MoveType(0, 1);
export const NoMove = new MoveType(0, 0);  // no move is possible

export class Coordinate {
    readonly row : number
    readonly column : number

    constructor(row:number, column:number) {
      this.row = row
      this.column = column
    }
}

export class Board {
    letters : string[][]
    selectedSquare : Coordinate | undefined

    constructor() {
        this.letters = []
        for (let r:number = 0; r < 5; r++) {
            this.letters[r] = []
            for (let c:number = 0; c < 5; c++) {
                this.letters[r][c] = ''
            }
        }

        this.selectedSquare = undefined
    }
    
    // Move contents
    move(direction: MoveType) {
        let targetRow = this.selectedSquare?.row
        let targetCol = this.selectedSquare?.column

        if (direction.equals(Up) && this.selectedSquare != undefined) {
            targetRow = this.selectedSquare?.row - 1
            const lettersInSquareUp = this.letters[targetRow][this.selectedSquare.column]
            console.log("Up")
            // Check if target row is not -1, then move contents up
            if (targetRow != -1 && lettersInSquareUp != '' && this.letters[this.selectedSquare.row][this.selectedSquare.column].length + lettersInSquareUp.length <= 6){
                this.letters[targetRow][this.selectedSquare.column] =  this.letters[this.selectedSquare.row][this.selectedSquare.column]+this.letters[targetRow][this.selectedSquare.column];
                console.log(this.letters[targetRow][this.selectedSquare.column])
                this.letters[this.selectedSquare.row][this.selectedSquare.column] = '';
                this.selectedSquare = new Coordinate(targetRow, this.selectedSquare.column);
                console.log("Legal move")
                return true
                //this.letters[targetRow][this.selectedSquare?.column]
            }
            else {
                console.log("Illegal move!")
                return false
            }
        }
        if (direction.equals(Down) && this.selectedSquare != undefined) {
            targetRow = this.selectedSquare?.row + 1
            const lettersInSquareDown = this.letters[targetRow][this.selectedSquare.column]
            console.log("Down")
            // Check if target row is not 5, then move contents down
            if (targetRow != 5 && this.letters[targetRow][this.selectedSquare.column] != '' && this.letters[this.selectedSquare.row][this.selectedSquare.column].length + lettersInSquareDown.length <= 6) {
                this.letters[targetRow][this.selectedSquare.column] =  this.letters[this.selectedSquare.row][this.selectedSquare.column]+this.letters[targetRow][this.selectedSquare.column];
                console.log(this.letters[targetRow][this.selectedSquare.column])
                this.letters[this.selectedSquare.row][this.selectedSquare.column] = '';
                this.selectedSquare = new Coordinate(targetRow, this.selectedSquare.column);
                console.log("Legal move")
                return true
            }
            else {
                console.log("Illegal move!")
                return false
            }
        }
        if (direction.equals(Left) && this.selectedSquare != undefined) {
            targetCol = this.selectedSquare?.column - 1
            const lettersInSquareLeft = this.letters[this.selectedSquare.row][targetCol]
            console.log("Left")
            // Check if target column is not -1, then move contents left
            if (targetCol != -1 && this.letters[this.selectedSquare.row][targetCol] != '' && this.letters[this.selectedSquare.row][this.selectedSquare.column].length + lettersInSquareLeft.length <= 6){
                this.letters[this.selectedSquare.row][targetCol] =  this.letters[this.selectedSquare.row][this.selectedSquare.column]+this.letters[this.selectedSquare.row][targetCol];
                console.log(this.letters[this.selectedSquare.row][targetCol])
                this.letters[this.selectedSquare.row][this.selectedSquare.column] = '';
                this.selectedSquare = new Coordinate(this.selectedSquare.row, targetCol);
                console.log("Legal move")
                return true
            }
            else {
                console.log("Illegal move!")
                return false
            }
        }
        if (direction.equals(Right) && this.selectedSquare != undefined) {
            targetCol = this.selectedSquare?.column + 1
            const lettersInSquareRight = this.letters[this.selectedSquare.row][targetCol]
            console.log("Right")
            // Check if target column is not 5, then move contents right
            if (targetCol != 5 && this.letters[this.selectedSquare.row][targetCol] != '' && this.letters[this.selectedSquare.row][this.selectedSquare.column].length + lettersInSquareRight.length <= 6){
                this.letters[this.selectedSquare.row][targetCol] =  this.letters[this.selectedSquare.row][this.selectedSquare.column]+this.letters[this.selectedSquare.row][targetCol];
                console.log(this.letters[this.selectedSquare.row][targetCol])
                this.letters[this.selectedSquare.row][this.selectedSquare.column] = '';
                this.selectedSquare = new Coordinate(this.selectedSquare.row, targetCol);
                console.log("Legal move")
                return true
            }
            else {
                console.log("Illegal move!")
                return false
            }
        }
    }
}




export class Model {
    words : string[]
    board : Board
    readonly configs = [ config1, config2, config3]
    chosen : number

    /** which is zero-based. */
    constructor(which:number) {
        this.chosen = which
        let puzzle =  this.configs[this.chosen]
        let board = new Board()
        this.words = []
        /** Initializes the board to the letters in the configuration */
        for (let r:number = 0; r < 5; r++) {
            this.words[r] = puzzle.words[r]

            for (let c:number = 0; c < 5; c++) {
                board.letters[r][c] = puzzle.initial[r][c]
            }
        }
        this.board = board
    }

    contents(row:number, column:number) {
        return this.board.letters[row][column]
    }

    calculateScore(): number {
        let score = 0;
        for (let r = 0; r < 5; r++) {
            for (let c = 0; c < 5; c++) {
                let cellValue = this.board.letters[r][c];
                if (cellValue.length >= 2) {
                    for (let word of this.words) {
                        if (word.includes(cellValue)) {
                            score += cellValue.length;
                            break;
                        }
                    }
                }
            }
        }
        return score;
    }

    formedFiveWords(): boolean {
        let wordCount = 0;
        const foundWords = new Set();
        for (let r = 0; r < 5; r++) {
            for (let c = 0; c < 5; c++) {
                let cellValue = this.board.letters[r][c];
                if (cellValue.length >= 3 && cellValue.length <= 6) {
                    for (let word of this.words) {
                        if (this.words.includes(cellValue) && !foundWords.has(cellValue)){
                            foundWords.add(cellValue);
                            wordCount++;
                            break;
                        }
                    }
                }
            }
        }
        return wordCount === 5;
    }
}
