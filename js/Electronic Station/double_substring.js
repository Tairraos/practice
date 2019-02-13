#!/usr/bin/env checkio --domain=js run double-substring

// https://js.checkio.org/mission/double-substring/

// There are four substring missionsthat were born all in one day and you shouldn’t be needed more than one day to solve them. All of those mission can be simply solved by brute force, but is it always the best way to go? (you might not have access to all of those missions yet, but they are going to be available with more opened islands on the map).
// 
// This is the third mission of the series, and it’s the only one where you have to return not a substring but a substring length. You need to find a substring that repeats more than once in a given string. This reiteration shouldn't have overlaps. For example, in a string "abcab" the longest substring that repeats more than once is "ab", so the answer should be 2 (length of "ab")
// 
// Input:String.Output:Int.
// 
// 
// END_DESC

"use strict";

function doubleSubstring(line) {
    // length of the longest substring that non-overlapping repeats more than once.

    // your code here
    return 0;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(doubleSubstring('aaaa'), 2, "First")
    assert.equal(doubleSubstring('abc'), 0, "Second")
    assert.equal(doubleSubstring('aghtfghkofgh'), 3, "Third")
    console.log('"Run" is good. How is "Check"?');
}