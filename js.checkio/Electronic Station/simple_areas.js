#!/usr/bin/env checkio --domain=js check simple-areas
// https://js.checkio.org/mission/simple-areas/

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