/**
 * https://leetcode-cn.com/problems/find-majority-element-lcci/
 * 面试题 17.10.主要元素
 * 难度：容易
 * 
 * 如果数组中多一半的数都是同一个，则称之为主要元素。给定一个整数数组，找到它的主要元素。若没有，返回-1。
 * 
 * 示例 1：
 * 输入：[1,2,5,9,5,9,5,5,5]
 * 输出：5
 * 
 * 示例 2：
 * 输入：[3,2]
 * 输出：-1
 * 
 * 示例 3：
 * 输入：[2,2,1,1,1,2,2]
 * 输出：2
 * 
 * 说明：
 * 你有办法在时间复杂度为 O(N)，空间复杂度为 O(1) 内完成吗？
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(majorityElement("param"), "expect", "Case 1");
assert.deepEqual(majorityElement("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
