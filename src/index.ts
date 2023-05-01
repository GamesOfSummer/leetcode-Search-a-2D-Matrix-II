import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function search(
    array: number[][],
    target: number,
    column: number,
    row: number
) {
    if (column < 0 || row < 0) {
        return false;
    } else if (array[column][row] === target) {
        return true;
    }

    let middle = Math.floor(array.length / 2);
    let midPointRow = array[middle][middle];

    if (midPointRow < target) {
        return search(array, target, column - 1, row);
    } else {
        return search(array, target, column, row - 1);
    }
}

function searchMatrix(array: number[][], target: number): boolean {
    if (array.length < 1) {
        return false;
    }

    let middle = Math.floor(array.length / 2);
    let midPointRow = array[middle][middle];

    return search(array, target, middle, middle);
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
