/**
 * https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/
 * 面试题43.1～n整数中1出现的次数
 * 难度：中等
 * 
 * 输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。
 * 
 * 例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。
 * 
 * 示例 1：
 * 输入：n = 12
 * 输出：5
 * 
 * 示例 2：
 * 输入：n = 13
 * 输出：6
 * 
 * 限制：
 * 
 * 1 <= n < 2^31
 * 
 * 注意：本题与主站 233 题相同：https://leetcode-cn.com/problems/number-of-digit-one/
 */

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(countDigitOne("param"), "expect", "Case 1");
assert.deepEqual(countDigitOne("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
