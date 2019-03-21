#!/usr/bin/env checkio --domain=js check create-intervals
// https://js.checkio.org/mission/create-intervals/

"use strict";

function createIntervals(data) {
    // generate Array of Intervals out of Array of Integers.

    // your code here
    return [];
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(createIntervals([1, 2, 3, 4, 5, 7, 8, 12]), [[1, 5], [7, 8], [12, 12]], "First")
    assert.deepEqual(createIntervals([1, 2, 3, 6, 7, 8, 4, 5]), [[1, 8]], "Second")
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}