/**
 * https://leetcode-cn.com/problems/permutations/
 * 0046.全排列
 * 难度：中等
 * 
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 
 * 示例：
 * 输入: [1,2,3]
 * 输出：
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(permute("param"), "expect", "caseName");
assert.deepEqual(permute("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
