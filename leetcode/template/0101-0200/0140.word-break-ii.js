/**
 * https://leetcode-cn.com/problems/word-break-ii/
 * 0140.单词拆分 II
 * 难度：困难
 * 
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。
 * 
 * 说明：
 *   - 分隔时可以重复使用字典中的单词。
 *   - 你可以假设字典中没有重复的单词。
 * 
 * 示例 1：
 * 输入：
 * s = "catsanddog"
 * wordDict = ["cat", "cats", "and", "sand", "dog"]
 * 输出：
 * [
 *   "cats and dog",
 *   "cat sand dog"
 * ]
 * 
 * 示例 2：
 * 输入：
 * s = "pineapplepenapple"
 * wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
 * 输出：
 * [
 *   "pine apple pen apple",
 *   "pineapple pen apple",
 *   "pine applepen apple"
 * ]
 * 解释: 注意你可以重复使用字典中的单词。
 * 
 * 示例 3：
 * 输入：
 * s = "catsandog"
 * wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出：
 * []
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(wordBreak("参数"), "期望结果");
assert.deepEqual(wordBreak("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
