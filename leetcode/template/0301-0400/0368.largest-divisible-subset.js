/**
 * https://leetcode-cn.com/problems/largest-divisible-subset/
 * 0368.最大整除子集
 * 难度：中等
 * 
 * 给出一个由无重复的正整数组成的集合，找出其中最大的整除子集，子集中任意一对 (Si，Sj) 都要满足：Si % Sj = 0 或 Sj % Si = 0。
 * 如果有多个目标子集，返回其中任何一个均可。
 * 
 * 示例 1：
 * 输入: [1,2,3]
 * 输出: [1,2] (当然, [1,3] 也正确)
 * 
 * 示例 2：
 * 输入: [1,2,4,8]
 * 输出: [1,2,4,8]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(largestDivisibleSubset("参数"), "期望结果");
assert.deepEqual(largestDivisibleSubset("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
