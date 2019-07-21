/**
 * https://leetcode-cn.com/problems/permutations-ii/
 * 0047.全排列 II
 * 难度：中等
 * 
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 
 * 示例：
 * 输入: [1,1,2]
 * 输出：
 * [
 *   [1,1,2],
 *   [1,2,1],
 *   [2,1,1]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(permuteUnique("param"), "expect", "caseName");
assert.deepEqual(permuteUnique("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
