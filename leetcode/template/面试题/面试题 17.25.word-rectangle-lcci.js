/**
 * https://leetcode-cn.com/problems/word-rectangle-lcci/
 * 面试题 17.25.单词矩阵
 * 难度：困难
 * 
 * 给定一份单词的清单，设计一个算法，创建由字母组成的面积最大的矩形，其中每一行组成一个单词(自左向右)，每一列也组成一个单词(自上而下)。不要求这些单词在清单里连续出现，但要求所有行等长，所有列等高。
 * 
 * 如果有多个面积最大的矩形，输出任意一个均可。一个单词可以重复使用。
 * 
 * 示例 1:
 * 输入: ["this", "real", "hard", "trh", "hea", "iar", "sld"]
 * 输出:
 * [
 *    "this",
 * "real",
 * "hard"
 * ]
 * 
 * 示例 2:
 * 输入: ["aa"]
 * 输出: ["aa","aa"]
 * 
 * 说明：
 * 
 * words.length <= 1000
 * words[i].length <= 100
 * 数据保证单词足够随机
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var maxRectangle = function(words) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(maxRectangle("param"), "expect", "Case 1");
assert.deepEqual(maxRectangle("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
