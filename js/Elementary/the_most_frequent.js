#!/usr/bin/env checkio --domain=js check the-most-frequent
// https://js.checkio.org/mission/the-most-frequent/

"use strict";

function mostFrequent(data) {
    // get all times of item
    let lens = data.map(item => data.join("").match(RegExp(item, "g")).length);
    // find the biggest one
    return data[lens.indexOf(Math.max(...lens))];
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