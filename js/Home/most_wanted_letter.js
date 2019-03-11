#!/usr/bin/env checkio --domain=js check most-wanted-letter
// https://js.checkio.org/mission/most-wanted-letter/

"use strict";

function mostWanted(data) {
    //lowcase -> 切成单字符 -> 排序后再合并回去 -> 按字母切成字串 -> 查找最长的字串 -> 返回第一个字母
    return data.toLowerCase().split("").sort().join("").match(/([a-z])\1*/g).reduce((a, b) => b.length > a.length ? b : a)[0];
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(mostWanted("Hello World!"), "l", "1st example");
    assert.equal(mostWanted("How do you do?"), "o", "2nd example");
    assert.equal(mostWanted("One"), "e", "3rd example");
    assert.equal(mostWanted("Oops!"), "o", "4th example");
    assert.equal(mostWanted("AAaooo!!!!"), "a", "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}