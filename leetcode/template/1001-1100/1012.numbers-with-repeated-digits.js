/**
 * https://leetcode-cn.com/problems/numbers-with-repeated-digits/
 * 1012.至少有 1 位重复的数字
 * 难度：困难
 * 
 * 给定正整数 N，返回小于等于 N 且具有至少 1 位重复数字的正整数。
 * 
 * 示例 1：
 * 输入：20
 * 输出：1
 * 解释：具有至少 1 位重复数字的正数（<= 20）只有 11 。
 * 
 * 示例 2：
 * 输入：100
 * 输出：10
 * 解释：具有至少 1 位重复数字的正数（<= 100）有 11，22，33，44，55，66，77，88，99 和 100 。
 * 
 * 示例 3：
 * 输入：1000
 * 输出：262
 * 
 * 提示：
 * 1 <= N <= 10^9
 */

/**
 * @param {number} N
 * @return {number}
 */
var numDupDigitsAtMostN = function(N) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(numDupDigitsAtMostN("参数"), "期望结果");
assert.deepEqual(numDupDigitsAtMostN("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
