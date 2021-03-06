/**
 * https://leetcode-cn.com/problems/super-pow/
 * 0372.超级次方
 * 难度：中等
 * 
 * 你的任务是计算 a^b 对 1337 取模，a 是一个正整数，b 是一个非常大的正整数且会以数组形式给出。
 * 
 * 示例 1：
 * 输入: a = 2, b = [3]
 * 输出: 8
 * 
 * 示例 2：
 * 输入: a = 2, b = [1,0]
 * 输出: 1024
 */

/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(superPow("param"), "expect", "Case 1");
assert.deepEqual(superPow("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
