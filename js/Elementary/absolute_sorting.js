#!/usr/bin/env checkio --domain=js run absolute-sorting

// https://js.checkio.org/mission/absolute-sorting/
// 让我们尝试一下排序。下面是一个包含特定规则的数组。
// 数组有各种数字。您应该对其进行排序, 但按升序的绝对值对其进行排序。
//    例如, 序列 (-20,-5, 10, 15) 将按如下排序: (-5、10、15、-20)。
//    您的函数应返回排序后的数组。
// 预置条件: 数组中的数字绝对值是唯一的。
// 输入: 数字数组。
// 输出: 按绝对值按升序排序的列表或元组 (不能是生成器)。
// 附加: 您的函数的结果将显示为测试面板中的列表。
// 
// 预置条件:
// len(set(abs(x) for x in array)) == len(array)
// 0 < len(array) < 100
// all(isinstance(x, int) for x in array)
// all(-100 < x < 100 for x in array)
// 
// END_DESC

"use strict";

function absoluteSorting(numbers) {
    //平常的sort方法调用
    return numbers.sort((a, b) => Math.abs(a) - Math.abs(b));
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(absoluteSorting([-20, -5, 10, 15]), [-5, 10, 15, -20], "Example");
    assert.deepEqual(absoluteSorting([1, 2, 3, 0]), [0, 1, 2, 3], "Positive numbers");
    assert.deepEqual(absoluteSorting([-1, -2, -3, 0]), [0, -1, -2, -3], "Negative numbers");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}