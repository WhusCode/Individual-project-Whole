import { expect, test } from 'vitest'
import { Model } from './model'

test('Home', async () => {
        let m:Model = new Model(0)     // check first configuration
        expect(m.board.letters[0][0]).toBe("E")

        expect(m.board.letters[0][1]).toBe("L")

        expect(m.board.letters[0][2]).toBe("W")

        expect(m.board.letters[0][3]).toBe("Y")

        expect(m.board.letters[0][4]).toBe("C")

        expect(m.board.letters[1][0]).toBe("Y")

        expect(m.board.letters[1][1]).toBe("L")

        expect(m.board.letters[1][2]).toBe("O")

        expect(m.board.letters[1][3]).toBe("A")

        expect(m.board.letters[1][4]).toBe("N")

        expect(m.board.letters[2][0]).toBe("U")

        expect(m.board.letters[2][1]).toBe("B")

        expect(m.board.letters[2][2]).toBe("L")

        expect(m.board.letters[2][3]).toBe("E")

        expect(m.board.letters[2][4]).toBe("E")

        expect(m.board.letters[3][0]).toBe("E")

        expect(m.board.letters[3][1]).toBe("L")

        expect(m.board.letters[3][2]).toBe("P")

        expect(m.board.letters[3][3]).toBe("M")

        expect(m.board.letters[3][4]).toBe("V")

        expect(m.board.letters[4][0]).toBe("P")

        expect(m.board.letters[4][1]).toBe("U")

        expect(m.board.letters[4][2]).toBe("R")

        expect(m.board.letters[4][3]).toBe("A")

        expect(m.board.letters[4][4]).toBe("U")

        let n:Model = new Model(1)      // check second configuration

        expect(n.board.letters[0][0]).toBe("E")

        expect(n.board.letters[0][1]).toBe("K")

        expect(n.board.letters[0][2]).toBe("O")

        expect(n.board.letters[0][3]).toBe("A")

        expect(n.board.letters[0][4]).toBe("P")

        expect(n.board.letters[1][0]).toBe("A")

        expect(n.board.letters[1][1]).toBe("W")

        expect(n.board.letters[1][2]).toBe("L")

        expect(n.board.letters[1][3]).toBe("I")

        expect(n.board.letters[1][4]).toBe("R")

        expect(n.board.letters[2][0]).toBe("N")

        expect(n.board.letters[2][1]).toBe("S")

        expect(n.board.letters[2][2]).toBe("F")

        expect(n.board.letters[2][3]).toBe("A")

        expect(n.board.letters[2][4]).toBe("T")

        expect(n.board.letters[3][0]).toBe("L")

        expect(n.board.letters[3][1]).toBe("E")

        expect(n.board.letters[3][2]).toBe("E")

        expect(n.board.letters[3][3]).toBe("R")

        expect(n.board.letters[3][4]).toBe("A")

        expect(n.board.letters[4][0]).toBe("A")

        expect(n.board.letters[4][1]).toBe("G")

        expect(n.board.letters[4][2]).toBe("G")

        expect(n.board.letters[4][3]).toBe("U")

        expect(n.board.letters[4][4]).toBe("J")

        let o:Model = new Model(2)      // check third configuration

        expect(o.board.letters[0][0]).toBe("H")

        expect(o.board.letters[0][1]).toBe("C")

        expect(o.board.letters[0][2]).toBe("N")

        expect(o.board.letters[0][3]).toBe("A")

        expect(o.board.letters[0][4]).toBe("N")

        expect(o.board.letters[1][0]).toBe("Y")

        expect(o.board.letters[1][1]).toBe("R")

        expect(o.board.letters[1][2]).toBe("A")

        expect(o.board.letters[1][3]).toBe("A")

        expect(o.board.letters[1][4]).toBe("A")

        expect(o.board.letters[2][0]).toBe("R")

        expect(o.board.letters[2][1]).toBe("E")

        expect(o.board.letters[2][2]).toBe("A")

        expect(o.board.letters[2][3]).toBe("Y")

        expect(o.board.letters[2][4]).toBe("B")

        expect(o.board.letters[3][0]).toBe("F")

        expect(o.board.letters[3][1]).toBe("P")

        expect(o.board.letters[3][2]).toBe("P")

        expect(o.board.letters[3][3]).toBe("E")

        expect(o.board.letters[3][4]).toBe("R")

        expect(o.board.letters[4][0]).toBe("I")

        expect(o.board.letters[4][1]).toBe("G")

        expect(o.board.letters[4][2]).toBe("A")

        expect(o.board.letters[4][3]).toBe("P")

        expect(o.board.letters[4][4]).toBe("A")



    }
)
