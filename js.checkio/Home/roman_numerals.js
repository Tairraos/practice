#!/usr/bin/env checkio --domain=js check roman-numerals
// https://js.checkio.org/mission/roman-numerals/

"use strict";

function romanNumerals(number) {
    // make a dictionary, 
    let dict = [
        ["", "M", "MM", "MMM"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    ]
    // number to string and get 4 place digits
    // -> reverse it, because dictionary is lower place to higher place
    // -> translate each number by dictionary
    // -> reverse back and join to string
    // cause you don know the 
    return ("000" + number).replace(/.*(....)$/, "$1").split("").map((n, i) => dict[i][+n]).join("");
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(romanNumerals(6), 'VI', "First");
    assert.equal(romanNumerals(76), 'LXXVI', "Second");
    assert.equal(romanNumerals(499), 'CDXCIX', "Third");
    assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII', "Forth");
    console.log("Done! Go Check!");
}