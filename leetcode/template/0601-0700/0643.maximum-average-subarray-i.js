/**
 * https://leetcode-cn.com/problems/maximum-average-subarray-i/
 * 0643.子数组最大平均数 I
 * 难度：容易
 * 
 * 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
 * 
 * 示例 1：
 * 输入: [1,12,-5,-6,50,3], k = 4
 * 输出: 12.75
 * 解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 * 
 * 注意：
 *   - 1 <= k <= n <= 30,000。
 *   - 所给数据范围 [-10,000，10,000]。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findMaxAverage("param"), "expect", "caseName");
assert.deepEqual(findMaxAverage("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
