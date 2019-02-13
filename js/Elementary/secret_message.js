#!/usr/bin/env checkio --domain=js run secret-message

// https://js.checkio.org/mission/secret-message/

// "Where does a wise man hide a leaf? In the forest.    But what does he do if there is no forest? ... He grows a forest to hide it in."
// -- Gilbert Keith Chesterton
// 
// Ever tried to send a secret message to someone without using the postal service? You could use newspapers to tell    your secret. Even if someone finds your message, it's easy to brush them off and that its paranoia and a bogus    conspiracy theory. One of the simplest ways to hide a secret message is to use capital letters. Let's find some of    these secret messages.
// 
// You are given a chunk of text. Gather all capital letters in one word in the order that they appear in the text.
// 
// For example: text =    "How are you?Eh, ok.Low orLower?Ohhh.",    if we collect all of the capital letters, we get the message "HELLO".
// 
// Input:A text as a string (unicode).
// 
// Output:The secret message as a string or an empty string.
// 
// Precondition:0 < len(text) ≤ 1000
// all(ch in string.printable for ch in text)
// 
// 
// END_DESC

"use strict";

function findMessage(data) {
    return data;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."), "HELLO", "hello");
    assert.equal(findMessage("hello world!"), "", "Nothing");
    assert.equal(findMessage("HELLO WORLD!!!"), "HELLOWORLD", "Capitals");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}