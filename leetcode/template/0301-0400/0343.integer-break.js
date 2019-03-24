/**
 * https://leetcode-cn.com/problems/integer-break/
 * 0343.整数拆分
 * 难度：中等
 * 
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
 * 
 * 示例 1：
 * 输入: 2
 * 输出: 1
 * 解释: 2 = 1 + 1, 1 × 1 = 1。
 * 
 * 示例 2：
 * 输入: 10
 * 输出: 36
 * 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 * 
 * 说明: 你可以假设 n 不小于 2 且不大于 58。
 */

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(integerBreak("参数"), "期望结果");
assert.deepEqual(integerBreak("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
