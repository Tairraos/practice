/**
 * https://leetcode-cn.com/problems/calculator-lcci/
 * 面试题 16.26.计算器
 * 难度：中等
 * 
 * 给定一个包含正整数、加(+)、减(-)、乘(*)、除(/)的算数表达式(括号除外)，计算其结果。
 * 
 * 表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。
 * 
 * 示例 1:
 * 输入: "3+2*2"
 * 输出: 7
 * 
 * 示例 2:
 * 输入: " 3/2 "
 * 输出: 1
 * 
 * 示例 3:
 * 输入: " 3+5 / 2 "
 * 输出: 5
 * 
 * 说明：
 * 
 * 你可以假设所给定的表达式都是有效的。
 * 请不要使用内置的库函数 eval。
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(calculate("param"), "expect", "Case 1");
assert.deepEqual(calculate("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
