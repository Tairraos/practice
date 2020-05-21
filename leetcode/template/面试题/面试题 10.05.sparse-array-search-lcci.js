/**
 * https://leetcode-cn.com/problems/sparse-array-search-lcci/
 * 面试题 10.05.稀疏数组搜索
 * 难度：容易
 * 
 * 稀疏数组搜索。有个排好序的字符串数组，其中散布着一些空字符串，编写一种方法，找出给定字符串的位置。
 * 
 * 示例1:
 *  输入: words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ta"
 *  输出：-1
 *  说明: 不存在返回-1。
 * 
 * 示例2:
 *  输入：words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ball"
 *  输出：4
 * 
 * 提示:
 * words的长度在[1, 1000000]之间
 */

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function(words, s) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findString("param"), "expect", "Case 1");
assert.deepEqual(findString("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
