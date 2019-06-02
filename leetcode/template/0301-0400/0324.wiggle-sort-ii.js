/**
 * https://leetcode-cn.com/problems/wiggle-sort-ii/
 * 0324.摆动排序 II
 * 难度：中等
 * 
 * 给定一个无序的数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。
 * 
 * 示例 1：
 * 输入: nums = [1, 5, 1, 1, 6, 4]
 * 输出: 一个可能的答案是 [1, 4, 1, 5, 1, 6]
 * 
 * 示例 2：
 * 输入: nums = [1, 3, 2, 2, 3, 1]
 * 输出: 一个可能的答案是 [2, 3, 1, 3, 1, 2]
 * 
 * 说明：
 * 你可以假设所有输入都会得到有效的结果。
 * 
 * 进阶：
 * 你能用 O(n) 时间复杂度和 / 或原地 O(1) 额外空间来实现吗？
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(wiggleSort("param"), "expect", "caseName");
assert.deepEqual(wiggleSort("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
