/**
 * https://leetcode-cn.com/problems/closed-number-lcci/
 * 面试题 05.04.下一个数
 * 难度：中等
 * 
 * 下一个数。给定一个正整数，找出与其二进制表达式中1的个数相同且大小最接近的那两个数（一个略大，一个略小）。
 * 
 *  示例1:
 * 
 *  输入：num = 2（或者0b10）
 *  输出：[4, 1] 或者（[0b100, 0b1]）
 * 
 *  示例2:
 * 
 *  输入：num = 1
 *  输出：[2, -1]
 * 
 *  提示:
 * 
 * num的范围在[1, 2147483647]之间；
 * 如果找不到前一个或者后一个满足条件的正数，那么输出 -1。
 */

/**
 * @param {number} num
 * @return {number[]}
 */
var findClosedNumbers = function(num) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findClosedNumbers("param"), "expect", "Case 1");
assert.deepEqual(findClosedNumbers("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
