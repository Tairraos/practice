#!/usr/bin/env checkio --domain=js check caesar-cipher-encryptor

// https://js.checkio.org/mission/caesar-cipher-encryptor/

// This mission is the part of the set. Another one -Caesar cipher decriptor.
// 
// Your mission is to encrypt a secret message (text only, without special chars like "!", "&", "?" etc.) using Caesar cipher where each letter of input text is replaced by another that stands at a fixed distance. For example ("a b c", 3) == "d e f"
// 
// 
// 
// Input:A secret message as a string (lowercase letters only and white spaces)
// 
// Output:The same string, but encrypted
// 
// Precondition:
// 0<len(text)<50
// -26<delta<26
// 
// 
// END_DESC

"use strict";

function toEncrypt(text, delta) {
    // your code here
    return text;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(toEncrypt('abc', 10))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(toEncrypt("a b c", 3), "d e f")
    assert.equal(toEncrypt("a b c", -3), "x y z")
    assert.equal(toEncrypt("simple text", 16), "iycfbu junj")
    assert.equal(toEncrypt("important text", 10), "swzybdkxd dohd")
    assert.equal(toEncrypt("state secret", -13), "fgngr frperg")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}