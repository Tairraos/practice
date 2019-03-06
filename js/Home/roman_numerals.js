#!/usr/bin/env checkio --domain=js check roman-numerals
// https://js.checkio.org/mission/roman-numerals/

"use strict";

function romanNumerals(number) {
    let dict = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"]
    ]
    //数字变字串 -> 切成个位 -> 查表转换 -> 拼起来
    //表是从个位十位百位排列，所以查表的时候先反过来查，查完再反回去。
    return number.toString().split("").reverse().map((n, i) => dict[i][+n]).reverse().join("");
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(romanNumerals(6), 'VI', "First");
    assert.equal(romanNumerals(76), 'LXXVI', "Second");
    assert.equal(romanNumerals(499), 'CDXCIX', "Third");
    assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII', "Forth");
    console.log("Done! Go Check!");
}