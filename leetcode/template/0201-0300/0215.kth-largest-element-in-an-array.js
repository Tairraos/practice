/**
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 * 0215.数组中的第K个最大元素
 * 难度：中等
 * 
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 
 * 示例 1：
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 * 
 * 示例 2：
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 * 
 * 说明：
 * 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findKthLargest("param"), "expect", "Case 1");
assert.deepEqual(findKthLargest("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
