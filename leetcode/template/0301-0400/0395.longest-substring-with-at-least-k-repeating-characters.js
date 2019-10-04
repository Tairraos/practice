/**
 * https://leetcode-cn.com/problems/longest-substring-with-at-least-k-repeating-characters/
 * 0395.至少有K个重复字符的最长子串
 * 难度：中等
 * 
 * 找到给定字符串（由小写字符组成）中的最长子串 T ， 要求 T 中的每一字符出现次数都不少于 k 。输出 T 的长度。
 * 
 * 示例 1：
 * 输入：
 * s = "aaabb", k = 3
 * 
 * 输出：
 * 3
 * 
 * 最长子串为 "aaa" ，其中 'a' 重复了 3 次。
 * 
 * 示例 2：
 * 输入：
 * s = "ababbc", k = 2
 * 
 * 输出：
 * 5
 * 
 * 最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(longestSubstring("param"), "expect", "Case 1");
assert.deepEqual(longestSubstring("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
