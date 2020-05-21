/**
 * https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
 * 面试题46.把数字翻译成字符串
 * 难度：中等
 * 
 * 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 &ldquo;a&rdquo; ，1 翻译成 &ldquo;b&rdquo;，&hellip;&hellip;，11 翻译成 &ldquo;l&rdquo;，&hellip;&hellip;，25 翻译成 &ldquo;z&rdquo;。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
 * 
 * 示例 1:
 * 输入: 12258
 * 输出: 5
 * 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
 * 
 * 提示：
 * 0 <= num < 231
 */

/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(translateNum("param"), "expect", "Case 1");
assert.deepEqual(translateNum("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
