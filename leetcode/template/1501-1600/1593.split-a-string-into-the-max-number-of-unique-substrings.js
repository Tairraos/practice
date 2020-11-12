/**
 * https://leetcode-cn.com/problems/split-a-string-into-the-max-number-of-unique-substrings/
 * 1593.拆分字符串使唯一子字符串的数目最大
 * 难度：中等
 * 
 * 给你一个字符串 s ，请你拆分该字符串，并返回拆分后唯一子字符串的最大数目。
 * 
 * 字符串 s 拆分后可以得到若干 非空子字符串 ，这些子字符串连接后应当能够还原为原字符串。但是拆分出来的每个子字符串都必须是 唯一的 。
 * 
 * 注意：子字符串 是字符串中的一个连续字符序列。
 * 
 * 示例 1：
 * 输入：s = "ababccc"
 * 输出：5
 * 解释：一种最大拆分方法为 [&#39;a&#39;, &#39;b&#39;, &#39;ab&#39;, &#39;c&#39;, &#39;cc&#39;] 。像 [&#39;a&#39;, &#39;b&#39;, &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;cc&#39;] 这样拆分不满足题目要求，因为其中的 &#39;a&#39; 和 &#39;b&#39; 都出现了不止一次。
 * 
 * 示例 2：
 * 输入：s = "aba"
 * 输出：2
 * 解释：一种最大拆分方法为 [&#39;a&#39;, &#39;ba&#39;] 。
 * 
 * 示例 3：
 * 输入：s = "aa"
 * 输出：1
 * 解释：无法进一步拆分字符串。
 * 
 * 提示：
 * 1 <= s.length <= 16
 * 
 * s 仅包含小写英文字母
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(maxUniqueSplit("param"), "expect", "Case 1");
assert.deepEqual(maxUniqueSplit("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
