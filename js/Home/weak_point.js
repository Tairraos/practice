#!/usr/bin/env checkio --domain=js run weak-point

// https://js.checkio.org/mission/weak-point/

// While traveling, the spaceship endures quite a lot of stress. As a result, an important part of the maintenance is    to check the outer hull. Stephan uses a digital durabilitimeter for this task. The device scans a portion of the    spaceships hull and gives a durability map that is divided by small square fragments with measurements. Sometimes    Stephan does not have much time and he can patch only couple points, so we need an algorithm to find the weak    points.
// 
// The durability map is represented as a matrix with digits. Each number is the durability measurement for the cell.    To find the weakest point we should find the weakest row and column. The weakest point is placed in the intersection    of these rows and columns. Row (column) durability is a sum of cell durability in that row (column). You should    find coordinates of the weakest point (row and column). The first row (column) is 0th row (column). If a section has    several equal weak points, then choose the top left point.
// 
// 
// END_DESC

"use strict";

function weakPoint(matrix) {
    let sumx = matrix.map((a) => a.reduce((i, j) => i + j)), //每一行都加起来
        sumy = matrix.reduce((a, b) => b.map((i, j) => a[j] + i)); //每一列都加起来

    return [sumx.indexOf(Math.min(...sumx)), sumy.indexOf(Math.min(...sumy))]; //找出行列的最小值
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