#!/usr/bin/env checkio --domain=js run count-neighbours
// https://js.checkio.org/mission/count-neighbours/

"use strict";

function countNeighbours(m, x, y) {
    //存在上面一行的话，左中右加起来
    //存在下面一行的话，左中右加起来
    //本行左右加起来。
    //!!是把undefined转成false, 做加法的时候会自动转成0
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
