/**
 * https://leetcode-cn.com/problems/number-of-subarrays-with-bounded-maximum/
 * 0795.区间子数组个数
 * 难度：中等
 * 
 * 给定一个元素都是正整数的数组A ，正整数 L 以及 R (L <= R)。
 * 求连续、非空且其中最大元素满足大于等于L 小于等于R的子数组个数。
 * 
 * 例如：
 * 输入：
 * A = [2, 1, 4, 3]
 * L = 2
 * R = 3
 * 输出: 3
 * 解释: 满足条件的子数组: [2], [2, 1], [3].
 * 
 * 注意：
 *   - L, R  和 A[i] 都是整数，范围在 [0, 10^9]。
 *   - 数组 A 的长度范围在[1, 50000]。
 */

/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function(A, L, R) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(numSubarrayBoundedMax("param"), "expect", "Case 1");
assert.deepEqual(numSubarrayBoundedMax("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
