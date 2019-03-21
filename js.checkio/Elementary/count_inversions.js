#!/usr/bin/env checkio --domain=js check count-inversions
// https://js.checkio.org/mission/count-inversions/

"use strict";

function countInversion(sequence) {
    // calculate every item how much after numbers are smaller than it
    // -> sum result
    return sequence.map((n, i) => sequence.slice(i + 1).filter(m => m < n).length).reduce((a, b) => a + b);
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(countInversion([1, 2, 5, 3, 4, 7, 6]), 3, "Example");
    assert.equal(countInversion([0, 1, 2, 3]), 0, "Sorted");
    assert.equal(countInversion([99, -99]), 1, "Two numbers");
    assert.equal(countInversion([5, 3, 2, 1, 0]), 10, "Reversed");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
