#!/usr/bin/env checkio --domain=js check most-wanted-letter
// https://js.checkio.org/mission/most-wanted-letter/

"use strict";

function mostWanted(data) {
    // lowcase 
    // -> split to array by each letter
    // -> sort and join to string
    // -> split to array by same letters 
    // -> use reduce to find the longgest item(string)
    // -> get the first letter of this string
    return data.toLowerCase().split("").sort().join("").match(/([a-z])\1*/g).reduce((a, b) => b.length > a.length ? b : a)[0];
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(mostWanted("Hello World!"), "l", "1st example");
    assert.equal(mostWanted("How do you do?"), "o", "2nd example");
    assert.equal(mostWanted("One"), "e", "3rd example");
    assert.equal(mostWanted("Oops!"), "o", "4th example");
    assert.equal(mostWanted("AAaooo!!!!"), "a", "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}