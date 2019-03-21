#!/usr/bin/env checkio --domain=js check common-words
// https://js.checkio.org/mission/common-words/

"use strict";

function commonWords(first, second) {
    // split first by "," to array
    // -> try to find every words in the second string, keep which is found.
    // -> sort by alphabet
    // -> join to string
    return first.split(",").filter(s => second.split(",").indexOf(s) !== -1).sort().join(",");
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(commonWords("hello,world", "hello,earth"), "hello", "Hello");
    assert.equal(commonWords("one,two,three", "four,five,six"), "", "Too different");
    assert.equal(commonWords("one,two,three", "four,five,one,two,six,three"), "one,three,two", "1 2 3");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
