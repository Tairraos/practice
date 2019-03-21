#!/usr/bin/env checkio --domain=js check digit-stack
// https://js.checkio.org/mission/digit-stack/

"use strict";

function digitStack(commands){
    return 0;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(digitStack(["PUSH 3", "POP", "POP", "PUSH 4", "PEEK",
                             "PUSH 9", "PUSH 0", "PEEK", "POP", "PUSH 1", "PEEK"]),
                             8, "Example");
    assert.equal(digitStack(["POP", "POP"]), 0, "pop, pop, zero");
    assert.equal(digitStack(["PUSH 9", "PUSH 9", "POP"]), 9, "Push the button");
    assert.equal(digitStack([]), 0, "Nothing");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}