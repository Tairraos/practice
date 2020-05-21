/**
 * https://leetcode-cn.com/problems/convert-integer-lcci/
 * 面试题 05.06.整数转换
 * 难度：容易
 * 
 * 整数转换。编写一个函数，确定需要改变几个位才能将整数A转成整数B。
 * 
 *  示例1:
 * 
 *  输入：A = 29 （或者0b11101）, B = 15（或者0b01111）
 *  输出：2
 * 
 *  示例2:
 * 
 *  输入：A = 1，B = 2
 *  输出：2
 * 
 *  提示:
 * 
 * A，B范围在[-2147483648, 2147483647]之间
 */

/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function(A, B) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(convertInteger("param"), "expect", "Case 1");
assert.deepEqual(convertInteger("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
