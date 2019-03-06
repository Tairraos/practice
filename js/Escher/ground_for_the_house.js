#!/usr/bin/env checkio --domain=js run ground-for-the-house

// https://js.checkio.org/mission/ground-for-the-house/

// 
// END_DESC

"use strict";

function house(plan) {
    //把#换成1 -> 按回车切成数组 -> 两个两个转化成二进制做或运算生成一个投影字串 -> 替换掉两头的0 -> 字串的长度就是宽
    //把字串最开头和最尾部的回车和0都去掉 -> 按回车切成数组 -> 数组的长度就是高
    return plan.replace(/#/g, "1").split("\n").reduce((a, b) => (parseInt(0 + a, 2) | parseInt(b, 2)).toString(2)).replace(/^0+|0+$/g, "").length 
        *  plan.replace(/^[\n0]+|[\n0]+$/g, "").split("\n").length;
    }

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(house(`
0000000
##00##0
######0
##00##0
#0000#0
`))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(house(`
0000000
##00##0
######0
##00##0
#0000#0
`), 24)

    assert.equal(house(`0000000000
#000##000#
##########
##000000##
0000000000
`), 30)

    assert.equal(house(`0000
0000
#000
`), 1)

    assert.equal(house(`0000
0000
`), 0)

    assert.equal(house(`0##0
0000
#00#
`), 12)

    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}