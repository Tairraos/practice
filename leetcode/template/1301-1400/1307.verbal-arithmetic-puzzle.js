/**
 * https://leetcode-cn.com/problems/verbal-arithmetic-puzzle/
 * 1307.口算难题
 * 难度：困难
 * 
 * 给你一个方程，左边用 words 表示，右边用 result 表示。
 * 
 * 你需要根据以下规则检查方程是否可解：
 * 
 * 每个字符都会被解码成一位数字（0 - 9）。
 * 每对不同的字符必须映射到不同的数字。
 * 每个 words[i] 和 result 都会被解码成一个没有前导零的数字。
 * 左侧数字之和（words）等于右侧数字（result）。 
 * 
 * 如果方程可解，返回 True，否则返回 False。
 * 
 * 示例 1：
 * 输入：words = ["SEND","MORE"], result = "MONEY"
 * 输出：true
 * 解释：映射 &#39;S&#39;-> 9, &#39;E&#39;->5, &#39;N&#39;->6, &#39;D&#39;->7, &#39;M&#39;->1, &#39;O&#39;->0, &#39;R&#39;->8, &#39;Y&#39;->&#39;2&#39;
 * 所以 "SEND" + "MORE" = "MONEY" ,  9567 + 1085 = 10652
 * 
 * 示例 2：
 * 输入：words = ["SIX","SEVEN","SEVEN"], result = "TWENTY"
 * 输出：true
 * 解释：映射 &#39;S&#39;-> 6, &#39;I&#39;->5, &#39;X&#39;->0, &#39;E&#39;->8, &#39;V&#39;->7, &#39;N&#39;->2, &#39;T&#39;->1, &#39;W&#39;->&#39;3&#39;, &#39;Y&#39;->4
 * 所以 "SIX" + "SEVEN" + "SEVEN" = "TWENTY" ,  650 + 68782 + 68782 = 138214
 * 
 * 示例 3：
 * 输入：words = ["THIS","IS","TOO"], result = "FUNNY"
 * 输出：true
 * 
 * 示例 4：
 * 输入：words = ["LEET","CODE"], result = "POINT"
 * 输出：false
 * 
 * 提示：
 * 2 <= words.length <= 5
 * 1 <= words[i].length, results.length <= 7
 * words[i], result 只含有大写英文字母
 * 表达式中使用的不同字符数最大为 10
 */

/**
 * @param {string[]} words
 * @param {string} result
 * @return {boolean}
 */
var isSolvable = function(words, result) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(isSolvable("param"), "expect", "Case 1");
assert.deepEqual(isSolvable("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
