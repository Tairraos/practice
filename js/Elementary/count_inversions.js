#!/usr/bin/env checkio --domain=js check count-inversions

// https://js.checkio.org/mission/count-inversions/

// In computer science and discrete mathematics,    aninversionis a pair of places in a sequence where the elements in these places are out of their natural order. So, if we use    ascending order for a group of numbers, then an inversion is when larger numbers appear before lower number in a    sequence.
// 
// Check out this example sequence: (1, 2, 5, 3, 4, 7, 6) and we can see here three inversions
// - 5 and 3;    - 5 and 4;    - 7 and 6.
// 
// You are given a sequence of unique numbers and you should count the number of inversions in this sequence.
// 
// Input:A sequence as a tuple of integers.
// 
// Output:The inversion number as an integer.
// 
// Precondition:2 < len(sequence) < 200
// len(sequence) == len(set(sequence))
// all(-100 < x < 100 for x in sequence)
// 
// 
// END_DESC

"use strict";

function countInversion(sequence){
    return 0;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(countInversion([1, 2, 5, 3, 4, 7, 6]), 3, "Example");
    assert.equal(countInversion([0, 1, 2, 3]), 0, "Sorted");
    assert.equal(countInversion([99, -99]), 1, "Two numbers");
    assert.equal(countInversion([5, 3, 2, 1, 0]), 10, "Reversed");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}