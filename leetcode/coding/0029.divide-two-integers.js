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
var divide = function (dividend, divisor) {
    let result = 0, isNag = dividend < 0 ^ divisor < 0;
    if (dividend <= -2147483648 && divisor === -1) return 2147483647;
    [dividend, divisor] = [Math.abs(dividend), Math.abs(divisor)];
    while (dividend >= divisor) {
        divisor += divisor;
        result++;
    }
    return isNag ? -result : result;
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(divide(10, 3), 3);
assert.deepEqual(divide(10, 4), 2);
assert.deepEqual(divide(10, 2), 5);
assert.deepEqual(divide(10, -2), -5);
assert.deepEqual(divide(-10, 2), -5);
assert.deepEqual(divide(-10, -2), 5);
assert.deepEqual(divide(-10, -2), 5);

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");