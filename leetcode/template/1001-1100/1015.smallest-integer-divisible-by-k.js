/**
 * https://leetcode-cn.com/problems/smallest-integer-divisible-by-k/
 * 1015.可被 K 整除的最小整数
 * 难度：中等
 * 
 * 给定正整数 K，你需要找出可以被 K 整除的、仅包含数字 1 的最小正整数 N。
 * 
 * 返回 N 的长度。如果不存在这样的 N，就返回 -1。
 * 
 * 示例 1：
 * 输入：1
 * 输出：1
 * 解释：最小的答案是 N = 1，其长度为 1。
 * 
 * 示例 2：
 * 输入：2
 * 输出：-1
 * 解释：不存在可被 2 整除的正整数 N 。
 * 
 * 示例 3：
 * 输入：3
 * 输出：3
 * 解释：最小的答案是 N = 111，其长度为 3。
 * 
 * 提示：
 * 1 <= K <= 10^5
 */

/**
 * @param {number} K
 * @return {number}
 */
var smallestRepunitDivByK = function(K) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(smallestRepunitDivByK("param"), "expect", "Case 1");
assert.deepEqual(smallestRepunitDivByK("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
