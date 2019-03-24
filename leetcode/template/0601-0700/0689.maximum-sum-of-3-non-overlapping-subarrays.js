/**
 * https://leetcode-cn.com/problems/maximum-sum-of-3-non-overlapping-subarrays/
 * 0689.三个无重叠子数组的最大和
 * 难度：困难
 * 
 * 给定数组 nums 由正整数组成，找到三个互不重叠的子数组的最大和。
 * 每个子数组的长度为k，我们要使这3*k个项的和最大化。
 * 返回每个区间起始索引的列表（索引从 0 开始）。如果有多个结果，返回字典序最小的一个。
 * 
 * 示例：
 * 输入: [1,2,1,2,6,7,5,1], 2
 * 输出: [0, 3, 5]
 * 解释: 子数组 [1, 2], [2, 6], [7, 5] 对应的起始索引为 [0, 3, 5]。
 * 我们也可以取 [2, 1], 但是结果 [1, 3, 5] 在字典序上更大。
 * 
 * 注意：
 *   - nums.length的范围在[1, 20000]之间。
 *   - nums[i]的范围在[1, 65535]之间。
 *   - k的范围在[1, floor(nums.length / 3)]之间。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(maxSumOfThreeSubarrays("参数"), "期望结果");
assert.deepEqual(maxSumOfThreeSubarrays("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
