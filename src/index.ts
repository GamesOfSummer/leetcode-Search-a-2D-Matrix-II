import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function search(
    array: number[][],
    target: number,
    currentColumn: number,
    currentRow: number
) {
    if (
        currentColumn < 0 ||
        currentRow < 0 ||
        currentRow > array.length ||
        currentColumn > array.length
    ) {
        return false;
    } else if (array[currentColumn][currentRow] === target) {
        return true;
    }

    let middleRow = Math.floor(array.length / 2) + currentRow;
    let middleColumn = Math.floor(array.length / 2) + currentColumn;
    let currentValue = array[middleColumn][middleRow];

    if (currentValue < target) {
        return search(array, target, currentColumn - 1, currentRow);
    } else {
        return search(array, target, currentColumn, currentRow + 1);
    }
}

function searchMatrix(array: number[][], target: number): boolean {
    //let middle = Math.floor(array.length / 2);

    let currentValue = array[2][3]; // column IS 2nd place!

    return search(array, target, 0, 0);
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
