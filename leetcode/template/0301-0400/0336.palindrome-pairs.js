/**
 * https://leetcode-cn.com/problems/palindrome-pairs/
 * 0336.回文对
 * 难度：困难
 * 
 * 给定一组唯一的单词， 找出所有不同 的索引对(i, j)，使得列表中的两个单词， words[i] + words[j] ，可拼接成回文串。
 * 
 * 示例 1：
 * 输入: ["abcd","dcba","lls","s","sssll"]
 * 输出: [[0,1],[1,0],[3,2],[2,4]]
 * 解释: 可拼接成的回文串为 ["dcbaabcd","abcddcba","slls","llssssll"]
 * 
 * 示例 2：
 * 输入: ["bat","tab","cat"]
 * 输出: [[0,1],[1,0]]
 * 解释: 可拼接成的回文串为 ["battab","tabbat"]
 */

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(palindromePairs("param"), "expect", "Case 1");
assert.deepEqual(palindromePairs("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
