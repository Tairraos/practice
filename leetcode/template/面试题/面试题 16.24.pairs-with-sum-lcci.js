/**
 * https://leetcode-cn.com/problems/pairs-with-sum-lcci/
 * 面试题 16.24.数对和
 * 难度：中等
 * 
 * 设计一个算法，找出数组中两数之和为指定值的所有整数对。一个数只能属于一个数对。
 * 
 * 示例 1:
 * 输入: nums = [5,6,5], target = 11
 * 输出: [[5,6]]
 * 
 * 示例 2:
 * 输入: nums = [5,6,5,6], target = 11
 * 输出: [[5,6],[5,6]]
 * 
 * 提示：
 * nums.length <= 100000
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var pairSums = function(nums, target) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(pairSums("param"), "expect", "Case 1");
assert.deepEqual(pairSums("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
