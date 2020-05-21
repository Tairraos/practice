/**
 * https://leetcode-cn.com/problems/contiguous-sequence-lcci/
 * 面试题 16.17.连续数列
 * 难度：容易
 * 
 * 给定一个整数数组，找出总和最大的连续数列，并返回总和。
 * 
 * 示例：
 * 输入： [-2,1,-3,4,-1,2,1,-5,4]
 * 输出： 6
 * 解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 进阶：
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(maxSubArray("param"), "expect", "Case 1");
assert.deepEqual(maxSubArray("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
