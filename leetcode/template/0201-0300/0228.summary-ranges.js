/**
 * https://leetcode-cn.com/problems/summary-ranges/
 * 0228.汇总区间
 * 难度：中等
 * 
 * 给定一个无重复元素的有序整数数组，返回数组区间范围的汇总。
 * 
 * 示例 1：
 * 输入: [0,1,2,4,5,7]
 * 输出: ["0->2","4->5","7"]
 * 解释: 0,1,2 可组成一个连续的区间; 4,5 可组成一个连续的区间。
 * 
 * 示例 2：
 * 输入: [0,2,3,4,6,8,9]
 * 输出: ["0","2->4","6","8->9"]
 * 解释: 2,3,4 可组成一个连续的区间; 8,9 可组成一个连续的区间。
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(summaryRanges("参数"), "期望结果");
assert.deepEqual(summaryRanges("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
