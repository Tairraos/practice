/**
 * https://leetcode-cn.com/problems/maximum-product-of-word-lengths/
 * 0318.最大单词长度乘积
 * 难度：中等
 * 
 * 给定一个字符串数组 words，找到 length(word[i]) * length(word[j]) 的最大值，并且这两个单词不含有公共字母。你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。
 * 
 * 示例 1：
 * 输入: ["abcw","baz","foo","bar","xtfn","abcdef"]
 * 输出: 16
 * 解释: 这两个单词为 "abcw", "xtfn"。
 * 
 * 示例 2：
 * 输入: ["a","ab","abc","d","cd","bcd","abcd"]
 * 输出: 4
 * 解释: 这两个单词为 "ab", "cd"。
 * 
 * 示例 3：
 * 输入: ["a","aa","aaa","aaaa"]
 * 输出: 0
 * 解释: 不存在这样的两个单词。
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(maxProduct("参数"), "期望结果");
assert.deepEqual(maxProduct("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
