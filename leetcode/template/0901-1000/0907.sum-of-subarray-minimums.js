/**
 * https://leetcode-cn.com/problems/sum-of-subarray-minimums/
 * 0907.子数组的最小值之和
 * 难度：中等
 * 
 * 给定一个整数数组 A，找到 min(B) 的总和，其中 B 的范围为 A 的每个（连续）子数组。
 * 由于答案可能很大，因此返回答案模 10^9 + 7。
 * 
 * 示例：
 * 输入：[3,1,2,4]
 * 输出：17
 * 解释：
 * 子数组为 [3]，[1]，[2]，[4]，[3,1]，[1,2]，[2,4]，[3,1,2]，[1,2,4]，[3,1,2,4]。
 * 最小值为 3，1，2，4，1，1，2，1，1，1，和为 17。
 * 
 * 提示：
 *   - 1 <= A <= 30000
 *   - 1 <= A[i] <= 30000
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function(A) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(sumSubarrayMins("param"), "expect", "Case 1");
assert.deepEqual(sumSubarrayMins("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
