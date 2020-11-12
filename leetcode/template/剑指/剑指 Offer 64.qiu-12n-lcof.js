/**
 * https://leetcode-cn.com/problems/qiu-12n-lcof/
 * 剑指 Offer 64.求1+2+…+n
 * 难度：中等
 * 
 * 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 * 
 * 示例 1：
 * 输入: n = 3
 * 输出: 6
 * 
 * 示例 2：
 * 输入: n = 9
 * 输出: 45
 * 
 * 限制：
 * 
 * 1 <= n <= 10000
 */

/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(sumNums("param"), "expect", "Case 1");
assert.deepEqual(sumNums("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
