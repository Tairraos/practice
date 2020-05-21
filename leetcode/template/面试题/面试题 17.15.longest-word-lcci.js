/**
 * https://leetcode-cn.com/problems/longest-word-lcci/
 * 面试题 17.15.最长单词
 * 难度：中等
 * 
 * 给定一组单词words，编写一个程序，找出其中的最长单词，且该单词由这组单词中的其他单词组合而成。若有多个长度相同的结果，返回其中字典序最小的一项，若没有符合要求的单词则返回空字符串。
 * 示例：
 * 输入： ["cat","banana","dog","nana","walk","walker","dogwalker"]
 * 输出： "dogwalker"
 * 解释： "dogwalker"可由"dog"和"walker"组成。
 * 
 * 提示：
 * 0 
 * 1
 */

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(longestWord("param"), "expect", "Case 1");
assert.deepEqual(longestWord("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
