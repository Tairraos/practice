/**
 * https://leetcode-cn.com/problems/divide-two-integers/
 * 0029.两数相除
 * 难度：中等
 * 
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 
 * 示例 1：
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 * 
 * 示例 2：
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 * 
 * 说明：
 *   - 被除数和除数均为 32 位有符号整数。
 *   - 除数不为 0。
 *   - 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [-2^31,  2^31 - 1]。本题中，如果除法结果溢出，则返回 2^31 - 1。
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(divide("param"), "expect", "Case 1");
assert.deepEqual(divide("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
