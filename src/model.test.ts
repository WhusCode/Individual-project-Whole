
import { MoveType } from './model';

describe('MoveType', () => {
    describe('equals', () => {
        it('should return true for moves with the same deltar and deltac', () => {
            const move1 = new MoveType(1, 2);
            const move2 = new MoveType(1, 2);
            expect(move1.equals(move2)).toBe(true);
        });

        it('should return false for moves with different deltar or deltac', () => {
            const move1 = new MoveType(1, 2);
            const move2 = new MoveType(2, 3);
            expect(move1.equals(move2)).toBe(false);
        });
    });

    describe('add', () => {
        it('should return a new MoveType with summed deltar and deltac', () => {
            const move1 = new MoveType(1, 2);
            const move2 = new MoveType(3, 4);
            const result = move1.add(move2);
            expect(result.deltar).toBe(4);
            expect(result.deltac).toBe(6);
        });

        it('should return the same move when added with a move of (0, 0)', () => {
            const move1 = new MoveType(1, 2);
            const move2 = new MoveType(0, 0);
            const result = move1.add(move2);
            expect(result.deltar).toBe(1);
            expect(result.deltac).toBe(2);
        });
    });

    describe('toString', () => {
        it('should return a string representation of the move', () => {
            const move = new MoveType(1, 2);
            expect(move.toString()).toBe('MoveType(1, 2)');
        });
    });
});
