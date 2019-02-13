#!/usr/bin/env checkio --domain=js run short-string-conversion

// https://js.checkio.org/mission/short-string-conversion/

// You are given two strings, line1 and line2. Answer, what is the smallest number of operations you need to transform line1 to line2?
// 
// Operations are:
// 
// Delete one letter from one of stringsInsert one letter into one of stringsReplace one of letters from one of strings with another letter
// 
// Input:two arguments, two strings.
// 
// Output:int, minimum number of operations.
// 
// 
// Precondition:0<= len(line)<100
// 
// 
// END_DESC

"use strict";

function stepsToConvert(line1, line2) {
    return 0;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(stepsToConvert('line1', 'line1'), 0, "eq")
    assert.equal(stepsToConvert('line1', 'line2'), 1, "2")
    assert.equal(stepsToConvert('line', 'line2'), 1, "none to 2")
    assert.equal(stepsToConvert('ine', 'line2'), 2, "need two more")
    assert.equal(stepsToConvert('line1', '1enil'), 4, "everything is opposite")
    assert.equal(stepsToConvert('', ''), 0, "two empty")
    assert.equal(stepsToConvert('l', ''), 1, "one side")
    assert.equal(stepsToConvert('', 'l'), 1, "another side")
    console.log("You are good to go!");
}