/**
 * https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
 * 面试题 42.连续子数组的最大和
 * 难度：容易
 * 
 * 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 * 
 * 要求时间复杂度为O(n)。
 * 
 * 示例1:
 * 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 提示：
 * 1 <= arr.length <= 10^5
 * -100 <= arr[i] <= 100
 * 
 * 注意：本题与主站 53 题相同：https://leetcode-cn.com/problems/maximum-subarray/
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
