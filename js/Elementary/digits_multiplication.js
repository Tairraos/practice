#!/usr/bin/env checkio --domain=js check digits-multiplication

// https://js.checkio.org/mission/digits-multiplication/

// You are given a positive integer.    Your function should calculate the product of the digits excluding any zeroes.
// 
// For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).
// 
// Input:A positive integer.
// 
// Output:The product of the digits as an integer.
// 
// Precondition:0 < number < 106
// 
// 
// END_DESC

"use strict";

function digitsMultip(data) {
    return 0;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(digitsMultip(123405), 120, "1st");
    assert.equal(digitsMultip(999), 729, "2nd");
    assert.equal(digitsMultip(1000), 1, "3rd");
    assert.equal(digitsMultip(1111), 1, "4th");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}