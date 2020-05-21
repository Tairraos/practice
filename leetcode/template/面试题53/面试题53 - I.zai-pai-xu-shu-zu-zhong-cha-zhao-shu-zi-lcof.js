/**
 * https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
 * 面试题53 - I.在排序数组中查找数字 I
 * 难度：容易
 * 
 * 统计一个数字在排序数组中出现的次数。
 * 
 * 示例 1:
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: 2
 * 
 * 示例 2:
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: 0
 * 
 * 限制：
 * 
 * 0 <= 数组长度 <= 50000
 * 
 * 注意：本题与主站 34 题相同（仅返回值不同）：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(search("param"), "expect", "Case 1");
assert.deepEqual(search("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
