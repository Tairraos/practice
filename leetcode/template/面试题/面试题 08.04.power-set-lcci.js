/**
 * https://leetcode-cn.com/problems/power-set-lcci/
 * 面试题 08.04.幂集
 * 难度：中等
 * 
 * 幂集。编写一种方法，返回某集合的所有子集。集合中不包含重复的元素。
 * 
 * 说明：解集不能包含重复的子集。
 * 
 * 示例:
 *  输入： nums = [1,2,3]
 *  输出：
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
console.time("Time cost");

assert.deepEqual(subsets("param"), "expect", "Case 1");
assert.deepEqual(subsets("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
