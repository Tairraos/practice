/**
 * https://leetcode-cn.com/problems/contains-duplicate-iii/
 * 0220.存在重复元素 III
 * 难度：中等
 * 
 * 给定一个整数数组，判断数组中是否有两个不同的索引 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值最大为 t，并且 i 和 j 之间的差的绝对值最大为 ķ。
 * 
 * 示例 1：
 * 输入: nums = [1,2,3,1], k = 3, t = 0
 * 输出: true
 * 
 * 示例 2：
 * 输入: nums = [1,0,1,1], k = 1, t = 2
 * 输出: true
 * 
 * 示例 3：
 * 输入: nums = [1,5,9,1,5,9], k = 2, t = 3
 * 输出: false
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(containsNearbyAlmostDuplicate("param"), "expect", "Case 1");
assert.deepEqual(containsNearbyAlmostDuplicate("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
