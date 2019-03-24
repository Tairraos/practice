/**
 * https://leetcode-cn.com/problems/max-consecutive-ones-iii/
 * 1004.最大连续1的个数 III
 * 难度：中等
 * 
 * 给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。
 * 返回仅包含 1 的最长（连续）子数组的长度。
 * 
 * 示例 1：
 * 输入：A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
 * 输出：6
 * 解释：
 * [1,1,1,0,0,1,1,1,1,1,1]
 * 粗体数字从 0 翻转到 1，最长的子数组长度为 6。
 * 
 * 示例 2：
 * 输入：A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
 * 输出：10
 * 解释：
 * [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
 * 粗体数字从 0 翻转到 1，最长的子数组长度为 10。
 * 
 * 提示：
 *   - 1 <= A.length <= 20000
 *   - 0 <= K <= A.length
 *   - A[i] 为 0 或 1
 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(longestOnes("参数"), "期望结果");
assert.deepEqual(longestOnes("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
