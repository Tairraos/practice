#!/usr/bin/env checkio --domain=js check median
// https://js.checkio.org/mission/median/

"use strict";

function median(d) {
    //保持数组>2个元素 -> 排序 -> 取中间1或2位 -> 加起来除平均
    return d.concat(Infinity, -Infinity).sort((a, b) => a - b).slice(d.length / 2 + 0.5, -d.length / 2 - 0.5).reduce((a, b) => (a + b) / 2);
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(median([1, 2, 3, 4, 5]), 3, "1st example");
    assert.equal(median([3, 1, 2, 5, 3]), 3, "2nd example");
    assert.equal(median([1, 300, 2, 200, 1]), 2, "3rd example");
    assert.equal(median([3, 6, 20, 99, 10, 15]), 12.5, "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}