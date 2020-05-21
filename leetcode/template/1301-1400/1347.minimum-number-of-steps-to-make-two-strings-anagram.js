/**
 * https://leetcode-cn.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
 * 1347.制造字母异位词的最小步骤数
 * 难度：中等
 * 
 * 给你两个长度相等的字符串 s 和 t。每一个步骤中，你可以选择将 t 中的 任一字符 替换为 另一个字符。
 * 
 * 返回使 t 成为 s 的字母异位词的最小步骤数。
 * 
 * 字母异位词 指字母相同，但排列不同的字符串。
 * 
 * 示例 1：
 * 输出：s = "bab", t = "aba"
 * 输出：1
 * 提示：用 &#39;b&#39; 替换 t 中的第一个 &#39;a&#39;，t = "bba" 是 s 的一个字母异位词。
 * 示例 2：
 * 
 * 输出：s = "leetcode", t = "practice"
 * 输出：5
 * 提示：用合适的字符替换 t 中的 &#39;p&#39;, &#39;r&#39;, &#39;a&#39;, &#39;i&#39; 和 &#39;c&#39;，使 t 变成 s 的字母异位词。
 * 示例 3：
 * 
 * 输出：s = "anagram", t = "mangaar"
 * 输出：0
 * 提示："anagram" 和 "mangaar" 本身就是一组字母异位词。 
 * 示例 4：
 * 
 * 输出：s = "xxyyzz", t = "xxyyzz"
 * 输出：0
 * 
 * 示例 5：
 * 输出：s = "friend", t = "family"
 * 输出：4
 * 
 * 提示：
 * 1 <= s.length <= 50000
 * s.length == t.length
 * s 和 t 只包含小写英文字母
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(minSteps("param"), "expect", "Case 1");
assert.deepEqual(minSteps("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
