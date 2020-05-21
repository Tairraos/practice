/**
 * https://leetcode-cn.com/problems/word-transformer-lcci/
 * 面试题 17.22.单词转换
 * 难度：中等
 * 
 * 给定字典中的两个词，长度相等。写一个方法，把一个词转换成另一个词， 但是一次只能改变一个字符。每一步得到的新词都必须能在字典中找到。
 * 
 * 编写一个程序，返回一个可能的转换序列。如有多个可能的转换序列，你可以返回任何一个。
 * 
 * 示例 1:
 * 输入:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * 
 * 输出:
 * ["hit","hot","dot","lot","log","cog"]
 * 
 * 示例 2:
 * 输入:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 * 
 * 输出: []
 * 
 * 解释: endWord "cog" 不在字典中，所以不存在符合要求的转换序列。
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[]}
 */
var findLadders = function(beginWord, endWord, wordList) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findLadders("param"), "expect", "Case 1");
assert.deepEqual(findLadders("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
