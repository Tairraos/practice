#!/usr/bin/env checkio --domain=js check correct-sentence
// https://js.checkio.org/mission/correct-sentence/

"use strict";

function correctSentence(text) {
    //首字转大写 -> 末尾非字符替换成句号
    return text.replace(/^./,s=>s.toUpperCase()).replace(/\W*$/,".");
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(correctSentence("greetings, friends"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(correctSentence("greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends."), "Greetings, friends.")
    assert.equal(correctSentence("hi"), "Hi.")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}