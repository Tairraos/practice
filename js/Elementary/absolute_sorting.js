#!/usr/bin/env checkio --domain=js run absolute-sorting

// https://js.checkio.org/mission/absolute-sorting/

// Let's try some sorting. Here is an array with the specific rules.
// 
// The array        has various numbers. You should sort it, but sort it by absolute value in ascending order.    For example, the sequence (-20, -5, 10, 15) will be sorted like so: (-5, 10, 15, -20).    Your function should return the sorted list .
// 
// Precondition:The numbers in the array are unique by their absolute values.
// 
// Input:An array of numbers .
// 
// Output:The list or tuple (but not a generator) sorted by absolute values in ascending order.
// 
// Addition:The results of your function will be shown as a list in the tests explanation panel.
// 
// Precondition:    len(set(abs(x) for x in array)) == len(array)
// 0 < len(array) < 100
// all(isinstance(x, int) for x in array)
// all(-100 < x < 100 for x in array)
// 
// 
// 
// END_DESC

"use strict";

function absoluteSorting(numbers){
    return numbers
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(absoluteSorting([-20, -5, 10, 15]), [-5, 10, 15, -20], "Example");
    assert.deepEqual(absoluteSorting([1, 2, 3, 0]), [0, 1, 2, 3], "Positive numbers");
    assert.deepEqual(absoluteSorting([-1, -2, -3, 0]), [0, -1, -2, -3], "Negative numbers");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}