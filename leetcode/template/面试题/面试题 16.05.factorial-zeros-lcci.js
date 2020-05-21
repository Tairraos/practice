/**
 * https://leetcode-cn.com/problems/factorial-zeros-lcci/
 * 面试题 16.05.阶乘尾数
 * 难度：容易
 * 
 * 设计一个算法，算出 n 阶乘有多少个尾随零。
 * 
 * 示例 1:
 * 输入: 3
 * 输出: 0
 * 解释: 3! = 6, 尾数中没有零。
 * 
 * 示例 2:
 * 输入: 5
 * 输出: 1
 * 解释: 5! = 120, 尾数中有 1 个零.
 * 
 * 说明: 你算法的时间复杂度应为 O(log n) 。
 */

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(trailingZeroes("param"), "expect", "Case 1");
assert.deepEqual(trailingZeroes("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
