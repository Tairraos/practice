/**
 * https://leetcode-cn.com/problems/factorial-trailing-zeroes/
 * 0172.阶乘后的零
 * 难度：容易
 * 
 * 给定一个整数 n，返回 n! 结果尾数中零的数量。
 * 
 * 示例 1：
 * 输入: 3
 * 输出: 0
 * 解释: 3! = 6, 尾数中没有零。
 * 
 * 示例 2：
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
console.time("leetcode");

assert.deepEqual(trailingZeroes("参数"), "期望结果");
assert.deepEqual(trailingZeroes("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
