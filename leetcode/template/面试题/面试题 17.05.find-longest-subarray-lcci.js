/**
 * https://leetcode-cn.com/problems/find-longest-subarray-lcci/
 * 面试题 17.05. 字母与数字
 * 难度：中等
 * 
 * 给定一个放有字符和数字的数组，找到最长的子数组，且包含的字符和数字的个数相同。
 * 
 * 返回该子数组，若存在多个最长子数组，返回左端点最小的。若不存在这样的数组，返回一个空数组。
 * 
 * 示例 1:
 * 输入: ["A","1","B","C","D","2","3","4","E","5","F","G","6","7","H","I","J","K","L","M"]
 * 
 * 输出: ["A","1","B","C","D","2","3","4","E","5","F","G","6","7"]
 * 
 * 示例 2:
 * 输入: ["A","A"]
 * 
 * 输出: []
 * 
 * 提示：
 * array.length <= 100000
 */

/**
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray = function(array) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findLongestSubarray("param"), "expect", "Case 1");
assert.deepEqual(findLongestSubarray("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
