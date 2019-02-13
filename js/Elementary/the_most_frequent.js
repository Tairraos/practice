#!/usr/bin/env checkio --domain=js run the-most-frequent

// https://js.checkio.org/mission/the-most-frequent/

// You have a sequence of strings, and you’d like to determine the most frequently occurring string in the sequence.
// 
// Input:a Array of strings.
// 
// Output:a string.
// 
// 
// END_DESC

"use strict";

function mostFrequent(data) {
    // sums two passed arguments

    // your code here
    return '';
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(mostFrequent([
        'a', 'b', 'c', 
        'a', 'b',
        'a'
    ]))
    
    assert.equal(mostFrequent([
        'a', 'b', 'c', 
        'a', 'b',
        'a'
    ]), 'a')
    assert.equal(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']), 'bi')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}