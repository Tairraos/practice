#!/usr/bin/env checkio --domain=js check say-hi
// https://js.checkio.org/mission/say-hi/

"use strict";

function sayHi(name, age) {
    // just using new es6 string.
    return `Hi. My name is ${name} and I'm ${age} years old`;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(sayHi("Alex", 32), "Hi. My name is Alex and I'm 32 years old")
    assert.equal(sayHi("Frank", 68), "Hi. My name is Frank and I'm 68 years old")
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}