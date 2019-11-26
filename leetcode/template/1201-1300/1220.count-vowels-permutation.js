/**
 * https://leetcode-cn.com/problems/count-vowels-permutation/
 * 1220.统计元音字母序列的数目
 * 难度：困难
 * 
 * 给你一个整数 n，请你帮忙统计一下我们可以按下述规则形成多少个长度为 n 的字符串：
 * 
 * 字符串中的每个字符都应当是小写元音字母（&#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, &#39;u&#39;）
 * 每个元音 &#39;a&#39; 后面都只能跟着 &#39;e&#39;
 * 每个元音 &#39;e&#39; 后面只能跟着 &#39;a&#39; 或者是 &#39;i&#39;
 * 每个元音 &#39;i&#39; 后面 不能 再跟着另一个 &#39;i&#39;
 * 每个元音 &#39;o&#39; 后面只能跟着 &#39;i&#39; 或者是 &#39;u&#39;
 * 每个元音 &#39;u&#39; 后面只能跟着 &#39;a&#39;
 * 
 * 由于答案可能会很大，所以请你返回 模 10^9 + 7 之后的结果。
 * 
 * 示例 1：
 * 输入：n = 1
 * 输出：5
 * 解释：所有可能的字符串分别是："a", "e", "i" , "o" 和 "u"。
 * 
 * 示例 2：
 * 输入：n = 2
 * 输出：10
 * 解释：所有可能的字符串分别是："ae", "ea", "ei", "ia", "ie", "io", "iu", "oi", "ou" 和 "ua"。
 * 
 * 示例 3：
 * 输入：n = 5
 * 输出：68
 * 
 * 提示：
 * 1 <= n <= 2 * 10^4
 */

/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(countVowelPermutation("param"), "expect", "Case 1");
assert.deepEqual(countVowelPermutation("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
