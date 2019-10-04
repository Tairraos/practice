/**
 * https://leetcode-cn.com/problems/search-insert-position/
 * 0035.搜索插入位置
 * 难度：容易
 * 
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 * 
 * 示例 1：
 * 输入: [1,3,5,6], 5
 * 输出: 2
 * 
 * 示例 2：
 * 输入: [1,3,5,6], 2
 * 输出: 1
 * 
 * 示例 3：
 * 输入: [1,3,5,6], 7
 * 输出: 4
 * 
 * 示例 4：
 * 输入: [1,3,5,6], 0
 * 输出: 0
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(searchInsert("param"), "expect", "Case 1");
assert.deepEqual(searchInsert("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
