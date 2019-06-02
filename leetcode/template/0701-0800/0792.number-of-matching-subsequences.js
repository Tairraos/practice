/**
 * https://leetcode-cn.com/problems/number-of-matching-subsequences/
 * 0792.匹配子序列的单词数
 * 难度：中等
 * 
 * 给定字符串 S 和单词字典 words, 求 words[i] 中是 S 的子序列的单词个数。
 * 示例：
 * 输入：
 * S = "abcde"
 * words = ["a", "bb", "acd", "ace"]
 * 输出: 3
 * 解释: 有三个是 S 的子序列的单词: "a", "acd", "ace"。
 * 
 * 注意：
 *   - 所有在words和 S 里的单词都只由小写字母组成。
 *   - S 的长度在 [1, 50000]。
 *   - words 的长度在 [1, 5000]。
 *   - words[i]的长度在[1, 50]。
 */

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(numMatchingSubseq("param"), "expect", "caseName");
assert.deepEqual(numMatchingSubseq("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
