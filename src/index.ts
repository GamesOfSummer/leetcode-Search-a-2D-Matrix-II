import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function searchMatrix(array: number[][], target: number): boolean {
    let row = 0;
    let col = array[0].length - 1;
    while (row < array.length && col >= 0) {
        if (array[row][col] === target) {
            return true;
        } else if (array[row][col] > target) {
            col--;
        } else {
            row++;
        }
    }

    return false;
}

consoleStart();

validateFxn(
    searchMatrix(
        [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30],
        ],
        5
    ),
    true
);

consoleEnd();

export {};
