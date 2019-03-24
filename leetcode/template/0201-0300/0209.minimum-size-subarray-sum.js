/**
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/
 * 0209.长度最小的子数组
 * 难度：中等
 * 
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。
 * 
 * 示例：
 * 输入: s = 7, nums = [2,3,1,2,4,3]
 * 输出: 2
 * 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
 * 
 * 进阶：
 * 如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
 */

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(minSubArrayLen("参数"), "期望结果");
assert.deepEqual(minSubArrayLen("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
