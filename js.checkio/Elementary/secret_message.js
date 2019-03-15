#!/usr/bin/env checkio --domain=js check secret-message
// https://js.checkio.org/mission/secret-message/

"use strict";

function findMessage(data) {
    // use regexp to find all uppercase letter.
    // add a "A" to front to avoid zero match, and remove it after matched.
    return ("A" + data).match(/[A-Z]/g).slice(1).join("");
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."), "HELLO", "hello");
    assert.equal(findMessage("hello world!"), "", "Nothing");
    assert.equal(findMessage("HELLO WORLD!!!"), "HELLOWORLD", "Capitals");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}