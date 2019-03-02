#!/usr/bin/env checkio --domain=js run count-neighbours

// https://js.checkio.org/mission/count-neighbours/

// "Animals and plants can reproduce themselves,        but it was only recently shown that machines can be made which also        reproduce themselves... Other kinds of self-reproducing machines        will be described, and one simple mechanical        model, with no electrical or magnetic complications,        will be there in working order for the audience to inspect and operate."
// 
// -- Edward Forrest Moore
// 
// In cellular automata,the    Moore neighborhoodcomprises    the eight cells surrounding a central cell on a two-dimensional square lattice.    The neighborhood is named after Edward F. Moore, a pioneer of cellular automata theory.    Many board games are played with a rectangular grid with squares as cells.    For some games, it is important to know about the conditions of neighbouring cells for chip    (figure, draught etc) placement and strategy.
// 
// You are given a state for a rectangular board game grid with chips in a binary matrix, where 1    is a cell with a chip and 0 is an empty cell. You are also given the coordinates for a cell in    the form of row and column numbers (starting from 0). You should determine how many chips are    close to this cell. Every cell interacts with its eight neighbours; those cells that are    horizontally, vertically, or diagonally adjacent.
// 
// 
// 
// For the given examples (see the schema) there is the same grid:
// 
// 
// [[1, 0, 0, 1, 0],
//  [0, 1, 0, 0, 0],
//  [0, 0, 1, 0, 1],
//  [1, 0, 0, 0, 0],
//  [0, 0, 1, 0, 0]]
// 
// For the first example coordinates of the cell is (1, 2) and    as we can see from the schema this    cell has 3 neighbour chips.    For the second example coordinates is (0, 0) and this cell contains    a chip, but we count only neighbours and the answer is 1.
// 
// Input:Three arguments. A grid as a tuple of tuples with integers (1/0),    a row number and column number for a cell as integers.
// 
// Output:How many neighbouring cells have chips as an integer.
// 
// 
// Precondition:
// 3 ≤ len(grid) ≤ 10
// all(len(grid[0]) == len(row) for row in grid)
// 
// 
// END_DESC

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
