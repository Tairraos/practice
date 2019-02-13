#!/usr/bin/env checkio --domain=js run correct-sentence

// https://js.checkio.org/mission/correct-sentence/

// For the input of your function will be given one sentence. You have to return its fixed copy in a way so it’s always starts with a capital letter and ends with a dot.
// 
// Pay attention to the fact that not all of the fixes is necessary. If a sentence already ends with a dot then adding another one will be a mistake.
// 
// Input:A string.
// 
// Output:A string.
// 
// Precondition:No leading and trailing spaces, text contains only spaces, a-z A-Z , and .
// 
// 
// END_DESC

"use strict";

function correctSentence(text) {
    // returns a corrected sentence which starts with capital letter
    // and ends with dot.

    // your code here
    return text.replace();
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