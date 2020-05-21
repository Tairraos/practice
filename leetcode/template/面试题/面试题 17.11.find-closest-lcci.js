/**
 * https://leetcode-cn.com/problems/find-closest-lcci/
 * 面试题 17.11.单词距离
 * 难度：中等
 * 
 * 有个内含单词的超大文本文件，给定任意两个单词，找出在这个文件中这两个单词的最短距离(相隔单词数)。如果寻找过程在这个文件中会重复多次，而每次寻找的单词不同，你能对此优化吗?
 * 
 * 示例：
 * 输入：words = ["I","am","a","student","from","a","university","in","a","city"], word1 = "a", word2 = "student"
 * 输出：1
 * 
 * 提示：
 * words.length <= 100000
 */

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function(words, word1, word2) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findClosest("param"), "expect", "Case 1");
assert.deepEqual(findClosest("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
