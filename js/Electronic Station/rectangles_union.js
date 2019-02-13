#!/usr/bin/env checkio --domain=js run rectangles-union

// https://js.checkio.org/mission/rectangles-union/

// Your mission is to calculate the area covered by a union of rectangles. The rectangles can have a non-empty intersection, which means that a simple sum of given rectangle areas doesn't work. Every rectangle is represented as 4 integers. The first two integers are the coordinates of a left-top corner, and the next two - of a bottom right corner.
// 
// 
// 
// 
// 
// Input:Array of arrays.
// 
// Output:Int.
// 
// 
// END_DESC

"use strict";

function rectanglesUnion(recs) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(rectanglesUnion([
        [6, 3, 8, 10],
        [4, 8, 11, 10],
        [16, 8, 19, 11]
    ]))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(rectanglesUnion([
        [6, 3, 8, 10],
        [4, 8, 11, 10],
        [16, 8, 19, 11]
    ]), 33)
    assert.equal(rectanglesUnion([
        [16, 8, 19, 11]
    ]), 9)
    assert.equal(rectanglesUnion([
        [16, 8, 19, 11],
        [16, 8, 19, 11]
    ]), 9)
    assert.equal(rectanglesUnion([
        [16, 8, 16, 8]
    ]), 0)
    assert.equal(rectanglesUnion([
        
    ]), 0)
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}