#!/usr/bin/env checkio --domain=js check number-radix

// https://js.checkio.org/mission/number-radix/

// 你还记得数学课上的数字进制吗？让我们用它来练习。
// 给你一个正数字符串和它的基数。您的函数应将其转换为十进制数字。进制小于37且大于1，使用数字和字母 A-Z 的字符串。
// 注意无法转换数字的情况。例如: "1A" 不能转换为9进制。对于这种情况需要返回-1。
// 输入: 两个参数。字符串形式的数字和表示进制的基数。
// 输出: 转换为整数的数字。
// numberRadix ("af", 16) = = 175
// numberRadix("101", 2) = = 5
// numberRadix("101", 5) = = 26
// numberRadix ("z", 36) = = 35
// numberRadix ("ab", 10) = =-1
// 先决条件: 
// re.match("\A[A-Z0-9]\Z", str_number)
// 0 < len(str_number) ≤ 10
// 2 ≤ radix ≤ 36

// END_DESC

"use strict";

function numberRadix(n, r) {
    //检测出不应该包含的字符则返回-1
    return parseInt(RegExp(`[${"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(r)}]`).test(n) ? -1 : n, r);
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(numberRadix("AF", 16), 175, "Hex");
    assert.equal(numberRadix("101", 2), 5, "Bin");
    assert.equal(numberRadix("101", 5), 26, "5 base");
    assert.equal(numberRadix("Z", 36), 35, "Z base");
    assert.equal(numberRadix("AB", 10), -1, "B > A > 10");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}