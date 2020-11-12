/**
 * https://leetcode-cn.com/problems/number-of-substrings-with-only-1s/
 * 1513.仅含 1 的子串数
 * 难度：中等
 * 
 * 给你一个二进制字符串 s（仅由 &#39;0&#39; 和 &#39;1&#39; 组成的字符串）。
 * 
 * 返回所有字符都为 1 的子字符串的数目。
 * 
 * 由于答案可能很大，请你将它对 10^9 + 7 取模后返回。
 * 
 * 示例 1：
 * 输入：s = "0110111"
 * 输出：9
 * 解释：共有 9 个子字符串仅由 &#39;1&#39; 组成
 * "1" -> 5 次
 * "11" -> 3 次
 * "111" -> 1 次
 * 
 * 示例 2：
 * 输入：s = "101"
 * 输出：2
 * 解释：子字符串 "1" 在 s 中共出现 2 次
 * 
 * 示例 3：
 * 输入：s = "111111"
 * 输出：21
 * 解释：每个子字符串都仅由 &#39;1&#39; 组成
 * 
 * 示例 4：
 * 输入：s = "000"
 * 输出：0
 * 
 * 提示：
 * s[i] == &#39;0&#39; 或 s[i] == &#39;1&#39;
 * 1 <= s.length <= 10^5
 */

/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(numSub("param"), "expect", "Case 1");
assert.deepEqual(numSub("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
