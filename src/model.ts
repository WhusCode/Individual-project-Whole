
import { config1, config2, config3 } from './puzzle'

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

    constructor(initialConfig: string[][]) {
        this.letters = initialConfig
        this.selectedSquare = undefined
    }
}

export class Model {
    words : string[]
    board : Board
    readonly configs = [config1, config2, config3]

    /** which is zero-based. */
    constructor(selectedConfig:number) {
        let puzzle =  this.configs[selectedConfig]
        this.board = new Board(puzzle.initial)
        this.words = puzzle.words
    }

    setSelectedSquare(row:number, column:number) {
        this.board.selectedSquare = new Coordinate(row, column)
    }

    contents(row:number, column:number) {
        return this.board.letters[row][column]
    }
}