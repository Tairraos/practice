#!/usr/bin/env checkio --domain=js run middle-characters

// https://js.checkio.org/mission/middle-characters/

// You are given some string where you need to find its middle characters. The string may contain one word, a few symbols or a whole sentence. If the length of the string is even, then you should return two middle characters, but if the length is odd, return just one. For more details look at the Example.
// 
// 
// 
// Input:A string.
// 
// Output:The middle characters.
// 
// Precondition:
// 1<= the length of the text<= 100
// 
// 
// END_DESC

"use strict";

function middle(text) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(middle('example'))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(middle('example'), 'm')
    assert.equal(middle('test'), 'es')
    assert.equal(middle('very-very long sentence'), 'o')
    assert.equal(middle('I'), 'I')
    assert.equal(middle('no'), 'no')
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}