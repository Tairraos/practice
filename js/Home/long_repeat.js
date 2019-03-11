#!/usr/bin/env checkio --domain=js check long-repeat
// https://js.checkio.org/mission/long-repeat/

"use strict";

function longRepeat(line) {
    //正则把连续的字串切开来 -> map把值转成字串长度 —> 从小到大排序 -> 弹出最大值
    return line ? line.match(/(.)\1*/g).map(s => s.length).sort((a, b) => a - b).pop() : 0;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(longRepeat('sdsffffse'), 4, "First")
    assert.equal(longRepeat('ddvvrwwwrggg'), 3, "Second")
    console.log('"Run" is good. How is "Check"?');
}