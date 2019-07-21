/**
 * https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/
 * 0718.最长重复子数组
 * 难度：中等
 * 
 * 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。
 * 
 * 示例 1：
 * 输入：
 * A: [1,2,3,2,1]
 * B: [3,2,1,4,7]
 * 输出: 3
 * 解释：
 * 长度最长的公共子数组是 [3, 2, 1]。
 * 
 * 说明：
 *   - 1 <= len(A), len(B) <= 1000
 *   - 0 <= A[i], B[i] < 100
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findLength("param"), "expect", "caseName");
assert.deepEqual(findLength("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
