/**
 * https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
 * 面试题17.打印从1到最大的n位数
 * 难度：容易
 * 
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
 * 
 * 示例 1:
 * 输入: n = 1
 * 输出: [1,2,3,4,5,6,7,8,9]
 * 
 * 说明：
 * 
 * 用返回一个整数列表来代替打印
 * n 为正整数
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(printNumbers("param"), "expect", "Case 1");
assert.deepEqual(printNumbers("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
