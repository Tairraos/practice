/**
 * https://leetcode-cn.com/problems/beautiful-array/
 * 0932.漂亮数组
 * 难度：中等
 * 
 * 对于某些固定的 N，如果数组 A 是整数 1, 2, ..., N 组成的排列，使得：
 * 对于每个 i < j，都不存在 k 满足 i < k < j 使得 A[k] * 2 = A[i] + A[j]。
 * 那么数组 A 是漂亮数组。
 * 
 * 给定 N，返回任意漂亮数组 A（保证存在一个）。
 * 
 * 示例 1：
 * 输入：4
 * 输出：[2,1,4,3]
 * 
 * 示例 2：
 * 输入：5
 * 输出：[3,1,2,5,4]
 * 
 * 提示：
 *   - 1 <= N <= 1000
 */

/**
 * @param {number} N
 * @return {number[]}
 */
var beautifulArray = function(N) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(beautifulArray("param"), "expect", "Case 1");
assert.deepEqual(beautifulArray("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
