/**
 * https://leetcode-cn.com/problems/perfect-squares/
 * 0279.完全平方数
 * 难度：中等
 * 
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 * 
 * 示例 1：
 * 输入: n = 12
 * 输出: 3
 * 解释: 12 = 4 + 4 + 4.
 * 
 * 示例 2：
 * 输入: n = 13
 * 输出: 2
 * 解释: 13 = 4 + 9.
 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(numSquares("param"), "expect", "Case 1");
assert.deepEqual(numSquares("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
