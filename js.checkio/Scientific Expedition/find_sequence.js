#!/usr/bin/env checkio --domain=js check find-sequence
// https://js.checkio.org/mission/find-sequence/

"use strict";

function sequence(matrix) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    // These "asserts" are used for self-checking and not for an auto-testing

    assert.equal(sequence([
        [1, 2, 1, 1],
        [1, 1, 4, 1],
        [1, 3, 1, 6],
        [1, 7, 2, 5]
    ]), true)
    assert.equal(sequence([
        [7, 1, 4, 1],
        [1, 2, 5, 2],
        [3, 4, 1, 3],
        [1, 1, 8, 1]
    ]), false)
    assert.equal(sequence([
        [2, 1, 1, 6, 1],
        [1, 3, 2, 1, 1],
        [4, 1, 1, 3, 1],
        [5, 5, 5, 5, 5],
        [1, 1, 3, 1, 1]
    ]), true)
    assert.equal(sequence([
        [7, 1, 1, 8, 1, 1],
        [1, 1, 7, 3, 1, 5],
        [2, 3, 1, 2, 5, 1],
        [1, 1, 1, 5, 1, 4],
        [4, 6, 5, 1, 3, 1],
        [1, 1, 9, 1, 2, 1]
    ]), true)

    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}