/**
 * https://leetcode-cn.com/problems/increasing-subsequences/
 * 0491.递增子序列
 * 难度：中等
 * 
 * 给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2。
 * 
 * 示例：
 * 输入: [4, 6, 7, 7]
 * 输出: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
 * 
 * 说明：
 *   - 给定数组的长度不会超过15。
 *   - 数组中的整数范围是 [-100,100]。
 *   - 给定数组中可能包含重复数字，相等的数字应该被视为递增的一种情况。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findSubsequences("param"), "expect", "caseName");
assert.deepEqual(findSubsequences("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
