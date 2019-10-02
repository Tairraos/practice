/**
 * https://leetcode-cn.com/problems/maximum-number-of-balloons/
 * 1189.“气球” 的最大数量
 * 难度：容易
 * 
 * 给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。
 * 
 * 字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。
 * 
 * 示例 1：
 * 输入：text = "nlaebolko"
 * 输出：1
 * 
 * 示例 2：
 * 输入：text = "loonbalxballpoon"
 * 输出：2
 * 
 * 示例 3：
 * 输入：text = "leetcode"
 * 输出：0
 * 
 * 提示：
 * 1 <= text.length <= 10^4
 * text 全部由小写英文字母组成
 */

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(maxNumberOfBalloons("param"), "expect", "Case 1");
assert.deepEqual(maxNumberOfBalloons("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
