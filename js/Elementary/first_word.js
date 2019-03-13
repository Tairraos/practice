#!/usr/bin/env checkio --domain=js check first-word
// https://js.checkio.org/mission/first-word/

"use strict";

function firstWord(word) {
    // simple to use regexp
    return word.match(/[A-Za-z][\w']*/)[0];
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(firstWord("Hello world"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(firstWord("Hello world"), "Hello")
    assert.equal(firstWord(" a word "), "a")
    assert.equal(firstWord("don't touch it"), "don't")
    assert.equal(firstWord("greetings, friends"), "greetings")
    assert.equal(firstWord("... and so on ..."), "and")
    assert.equal(firstWord("hi"), "hi")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}