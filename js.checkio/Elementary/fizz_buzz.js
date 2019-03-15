#!/usr/bin/env checkio --domain=js check fizz-buzz
// https://js.checkio.org/mission/fizz-buzz/

"use strict";

function fizzBuzz(data) {
    // easy and clear
    return data % 15 ? data % 5 ? data % 3 ? data.toString() : "Fizz" : "Buzz" : "Fizz Buzz";
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(fizzBuzz(15), "Fizz Buzz", "15 is divisible by 3 and 5");
    assert.equal(fizzBuzz(6), "Fizz", "6 is divisible by 3");
    assert.equal(fizzBuzz(5), "Buzz", "5 is divisible by 5");
    assert.equal(fizzBuzz(7), "7", "7 is not divisible by 3 or 5");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}