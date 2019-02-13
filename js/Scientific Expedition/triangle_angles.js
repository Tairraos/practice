#!/usr/bin/env checkio --domain=js run triangle-angles

// https://js.checkio.org/mission/triangle-angles/

// You are given the lengths for each side on a triangle.    You need to find all three angles for this triangle.    If the given side lengths cannot form a triangle (or form a degenerated triangle),    then you must return all angles as 0 (zero).    The angles should be represented as a list of integers inascending order.    Each angle is measured in degrees and rounded to the nearest integer number (Standard mathematical rounding).
// 
// 
// 
// Input:The lengths of the sides of a triangle as integers.
// 
// Output:Angles of a triangle in degrees as sorted list of integers.
// 
// Precondition:
// 0 < a,b,c ≤ 1000
// 
// 
// END_DESC

"use strict";

function triangleAngles(a, b, c){
    return [0, 0, 0]
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(triangleAngles(4, 4, 4), [60, 60, 60], "All sides are equal");
    assert.deepEqual(triangleAngles(3, 4, 5), [37, 53, 90], "Egyptian triangle");
    assert.deepEqual(triangleAngles(2, 2, 5), [0, 0, 0], "It's can not be a triangle");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}