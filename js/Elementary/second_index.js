#!/usr/bin/env checkio --domain=js run second-index

// https://js.checkio.org/mission/second-index/

// You are given two strings and you have to find an index of the second occurrence of the second string in the first one.
// 
// Let's go through the first example where you need to find the second occurrence of "s" in a word "sims". It’s easy to find its first occurrence with a functionindexOfwhich will point out that "s" is the first symbol in a word "sims" and therefore the index of the first occurrence is 0. But we have to find the second "s" which is 4th in a row and that means that the index of the second occurrence (and the answer to a question) is 3.
// 
// Input:Two strings.
// 
// Output:Int or undefined
// 
// 
// END_DESC

"use strict";

function secondIndex(text, symbol) {
    // returns the second index of a symbol in a given text

    // your code here
    return 0;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example')
    console.log(secondIndex("sims", "s"))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(secondIndex("sims", "s"), 3)
    assert.equal(secondIndex("find the river", "e"), 12)
    assert.equal(secondIndex("hi", " "), undefined)
    assert.equal(secondIndex("hi mayor", " "), undefined)
    assert.equal(secondIndex("hi mr Mayor", " "), 5)
    console.log("You are awesome! All tests are done! Go Check it!");
}