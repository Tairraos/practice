/**
 * https://leetcode-cn.com/problems/delete-operation-for-two-strings/
 * 0583.两个字符串的删除操作
 * 难度：中等
 * 
 * 给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，每步可以删除任意一个字符串中的一个字符。
 * 
 * 示例 1：
 * 输入: "sea", "eat"
 * 输出: 2
 * 解释: 第一步将"sea"变为"ea"，第二步将"eat"变为"ea"
 * 
 * 说明：
 *   - 给定单词的长度不超过500。
 *   - 给定单词中的字符只含有小写字母。
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(minDistance("param"), "expect", "Case 1");
assert.deepEqual(minDistance("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
