/**
 * https://leetcode-cn.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
 * 1309.解码字母到整数映射
 * 难度：容易
 * 
 * 给你一个字符串 s，它由数字（&#39;0&#39; - &#39;9&#39;）和 &#39;#&#39; 组成。我们希望按下述规则将 s 映射为一些小写英文字符：
 * 
 * 字符（&#39;a&#39; - &#39;i&#39;）分别用（&#39;1&#39; - &#39;9&#39;）表示。
 * 字符（&#39;j&#39; - &#39;z&#39;）分别用（&#39;10#&#39; - &#39;26#&#39;）表示。 
 * 
 * 返回映射之后形成的新字符串。
 * 
 * 题目数据保证映射始终唯一。
 * 
 * 示例 1：
 * 输入：s = "10#11#12"
 * 输出："jkab"
 * 解释："j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
 * 
 * 示例 2：
 * 输入：s = "1326#"
 * 输出："acz"
 * 
 * 示例 3：
 * 输入：s = "25#"
 * 输出："y"
 * 
 * 示例 4：
 * 输入：s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
 * 输出："abcdefghijklmnopqrstuvwxyz"
 * 
 * 提示：
 * 1 <= s.length <= 1000
 * s[i] 只包含数字（&#39;0&#39;-&#39;9&#39;）和 &#39;#&#39; 字符。
 * s 是映射始终存在的有效字符串。
 */

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(freqAlphabets("param"), "expect", "Case 1");
assert.deepEqual(freqAlphabets("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
