#!/usr/bin/env checkio --domain=js check weak-point
// https://js.checkio.org/mission/weak-point/

"use strict";

function weakPoint(matrix) {
    // sum every row & column, 
    let sumRow = matrix.map((a) => a.reduce((i, j) => i + j)),
        sumCol = matrix.reduce((a, b) => b.map((i, j) => a[j] + i));
    // find the minimal row sum and column cum
    return [sumRow.indexOf(Math.min(...sumRow)), sumCol.indexOf(Math.min(...sumCol))];
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(weakPoint([
        [7, 2, 7, 2, 8],
        [2, 9, 4, 1, 7],
        [3, 8, 6, 2, 4],
        [2, 5, 2, 9, 1],
        [6, 6, 5, 4, 5]
    ]), [3, 3], "Example");
    assert.deepEqual(weakPoint([
        [7, 2, 4, 2, 8],
        [2, 8, 1, 1, 7],
        [3, 8, 6, 2, 4],
        [2, 5, 2, 9, 1],
        [6, 6, 5, 4, 5]
    ]), [1, 2], "Two weak point");

    assert.deepEqual(weakPoint([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]), [0, 0], "Top left");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}