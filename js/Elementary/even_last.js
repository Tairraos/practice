#!/usr/bin/env checkio --domain=js run even-last

// https://js.checkio.org/mission/even-last/

// You are given an array of integers. You should find the sum of the elements with even indexes (0th, 2nd, 4th...)    then    multiply this summed number and the final element of the array together. Don't forget that the first element has an    index of 0.
// 
// For an empty array, the result will always be 0 (zero).
// 
// Input:A list of integers.
// 
// Output:The number as an integer.
// 
// Precondition:0 ≤ len(array) ≤ 20
// all(isinstance(x, int) for x in array)
// all(-100 < x < 100 for x in array)
// 
// 
// 
// END_DESC

"use strict";

function evenLast(data) {
    return 0;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(evenLast([0, 1, 2, 3, 4, 5]), 30, "(0+2+4)*5=30");
    assert.equal(evenLast([1, 3, 5]), 30, "(1+5)*5=30");
    assert.equal(evenLast([6]), 36, "(6)*6=36");
    assert.equal(evenLast([]), 0, "An empty array = 0");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}