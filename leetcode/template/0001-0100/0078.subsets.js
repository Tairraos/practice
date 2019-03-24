/**
 * https://leetcode-cn.com/problems/subsets/
 * 0078.子集
 * 难度：中等
 * 
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 
 * 说明：解集不能包含重复的子集。
 * 
 * 示例：
 * 输入: nums = [1,2,3]
 * 输出：
 * [
 *   [3],
 *   [1],
 *   [2],
 *   [1,2,3],
 *   [1,3],
 *   [2,3],
 *   [1,2],
 *   []
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(subsets("参数"), "期望结果");
assert.deepEqual(subsets("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
