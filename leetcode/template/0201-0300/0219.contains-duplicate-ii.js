/**
 * https://leetcode-cn.com/problems/contains-duplicate-ii/
 * 0219.存在重复元素 II
 * 难度：容易
 * 
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。
 * 
 * 示例 1：
 * 输入: nums = [1,2,3,1], k = 3
 * 输出: true
 * 
 * 示例 2：
 * 输入: nums = [1,0,1,1], k = 1
 * 输出: true
 * 
 * 示例 3：
 * 输入: nums = [1,2,3,1,2,3], k = 2
 * 输出: false
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(containsNearbyDuplicate("param"), "expect", "caseName");
assert.deepEqual(containsNearbyDuplicate("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
