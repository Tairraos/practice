/**
 * https://leetcode-cn.com/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/
 * 剑指 Offer 20.表示数值的字符串
 * 难度：中等
 * 
 * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"-1E-16"、"0123"都表示数值，但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(isNumber("param"), "expect", "Case 1");
assert.deepEqual(isNumber("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
