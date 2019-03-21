#!/usr/bin/env checkio --domain=js check double-substring
// https://js.checkio.org/mission/double-substring/

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