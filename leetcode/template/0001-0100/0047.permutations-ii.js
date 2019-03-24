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
console.time("leetcode");

assert.deepEqual(permuteUnique("参数"), "期望结果");
assert.deepEqual(permuteUnique("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
