#!/usr/bin/env checkio --domain=js run simple-areas

// https://js.checkio.org/mission/simple-areas/

// Stephan works with simple forms when constructing something,    and he needs some programming tools to calculate his expenses.    Let's take a trip back to our school days and pull out some simple geometry for this.
// 
// You should write a function to calculate the area of simple figures: circles, rectangles and triangles.    You are give an arbitrary number of arguments and depending on this,    the function calculates area for the different figures.
// 
// One argument -- The diameter of a circle and you need to calculate the area of this circle.Two arguments -- The side lengths of a rectangle and you need to calculate the area of this rectangle.Three arguments -- The lengths of each side of a triangle and you need to calculate the area of this triangle.
// 
// The result should be given with two-digit precision as ±0.01.
// 
// Tips:Think about how to work withan arbitrary number of        arguments.
// 
// Input:One, two or three arguments as floats or as integers.
// 
// Output:The area of the circle, rectangle or triangle as a float.
// 
// Precondition:
// 0 < len(args) ≤ 3
// all(0 < x ≤ 1000 for x in args)
// For "triangle" cases the sum of the lengths of any two sides always exceeds the length of the third side.
// 
// 
// END_DESC

"use strict";

function simpleAreas(...args) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    // These "asserts" are used for self-checking and not for an auto-testing
    function almostEqual(checked, correct, significantDigits=2) {
        var precision = 0.1 ** significantDigits
        return correct - precision < checked && checked < correct + precision
    }

    var test1 = almostEqual(simpleAreas(3), 7.07)
    var test2 = almostEqual(simpleAreas(2, 2), 4)
    var test3 = almostEqual(simpleAreas(2, 3), 6)
    var test4 = almostEqual(simpleAreas(3, 5, 4), 6)
    var test5 = almostEqual(simpleAreas(1.5, 2.5, 2), 1.5)

    assert.equal(test1, true)
    assert.equal(test2, true)
    assert.equal(test3, true)
    assert.equal(test4, true)
    assert.equal(test5, true)

    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}