/**
 * https://leetcode-cn.com/problems/maximum-length-of-subarray-with-positive-product/
 * 1567.乘积为正数的最长子数组长度
 * 难度：中等
 * 
 * 给你一个整数数组 nums ，请你求出乘积为正数的最长子数组的长度。
 * 
 * 一个数组的子数组是由原数组中零个或者更多个连续数字组成的数组。
 * 
 * 请你返回乘积为正数的最长子数组长度。
 * 
 * 示例  1：
 * 输入：nums = [1,-2,-3,4]
 * 输出：4
 * 解释：数组本身乘积就是正数，值为 24 。
 * 
 * 示例 2：
 * 输入：nums = [0,1,-2,-3,-4]
 * 输出：3
 * 解释：最长乘积为正数的子数组为 [1,-2,-3] ，乘积为 6 。
 * 注意，我们不能把 0 也包括到子数组中，因为这样乘积为 0 ，不是正数。
 * 
 * 示例 3：
 * 输入：nums = [-1,-2,-3,0,1]
 * 输出：2
 * 解释：乘积为正数的最长子数组是 [-1,-2] 或者 [-2,-3] 。
 * 
 * 示例 4：
 * 输入：nums = [-1,2]
 * 输出：1
 * 
 * 示例 5：
 * 输入：nums = [1,2,3,5,-6,4,0,10]
 * 输出：4
 * 
 * 提示：
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(getMaxLen("param"), "expect", "Case 1");
assert.deepEqual(getMaxLen("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
