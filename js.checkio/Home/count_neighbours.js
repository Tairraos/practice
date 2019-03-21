#!/usr/bin/env checkio --domain=js check count-neighbours
// https://js.checkio.org/mission/count-neighbours/

"use strict";

function countNeighbours(m, x, y) {
    // if there is upper line, add left, top and right item
    // -> if there is lower line, add left, top and right item
    // -> and add left and right item of current line
    // -> !! will transfer undefined to false, false will auto transfer to 0
    return (m[x - 1] ? !!m[x - 1][y - 1] + !!m[x - 1][y] + !!m[x - 1][y + 1] : 0) +
           (m[x + 1] ? !!m[x + 1][y - 1] + !!m[x + 1][y] + !!m[x + 1][y + 1] : 0) +
                       !!m[x][y - 1]     + !!m[x][y + 1];
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 1, 2), 3, "1st example");

    assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 0, 0), 1, "2nd example");

    assert.equal(countNeighbours([[1, 1, 1],
                                  [1, 1, 1],
                                  [1, 1, 1]], 0, 2), 3, "Dense corner");

    assert.equal(countNeighbours([[0, 0, 0],
                                  [0, 1, 0],
                                  [0, 0, 0]], 1, 1), 0, "Single");

    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}