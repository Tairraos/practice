/**
 * https://leetcode-cn.com/problems/permutation-i-lcci/
 * 面试题 08.07.无重复字符串的排列组合
 * 难度：中等
 * 
 * 无重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。
 * 
 *  示例1:
 * 
 *  输入：S = "qwe"
 *  输出：["qwe", "qew", "wqe", "weq", "ewq", "eqw"]
 * 
 *  示例2:
 * 
 *  输入：S = "ab"
 *  输出：["ab", "ba"]
 * 
 *  提示:
 * 
 * 字符都是英文字母。
 * 字符串长度在[1, 9]之间。
 */

/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(permutation("param"), "expect", "Case 1");
assert.deepEqual(permutation("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
