/**
 * https://leetcode-cn.com/problems/english-int-lcci/
 * 面试题 16.08.整数的英语表示
 * 难度：困难
 * 
 * 给定一个整数，打印该整数的英文描述。
 * 
 * 示例 1:
 * 输入: 123
 * 输出: "One Hundred Twenty Three"
 * 
 * 示例 2:
 * 输入: 12345
 * 输出: "Twelve Thousand Three Hundred Forty Five"
 * 
 * 示例 3:
 * 输入: 1234567
 * 输出: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 * 
 * 示例 4:
 * 输入: 1234567891
 * 输出: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
 */

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(numberToWords("param"), "expect", "Case 1");
assert.deepEqual(numberToWords("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
