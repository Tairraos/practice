/**
 * https://leetcode-cn.com/problems/non-negative-integers-without-consecutive-ones/
 * 0600.不含连续1的非负整数
 * 难度：困难
 * 
 * 给定一个正整数 n，找出小于或等于 n 的非负整数中，其二进制表示不包含 连续的1 的个数。
 * 
 * 示例 1：
 * 输入: 5
 * 输出: 5
 * 解释：
 * 下面是带有相应二进制表示的非负整数<= 5：
 * 0 : 0
 * 1 : 1
 * 2 : 10
 * 3 : 11
 * 4 : 100
 * 5 : 101
 * 其中，只有整数3违反规则（有两个连续的1），其他5个满足规则。
 * 
 * 说明: 1 <= n <= 10^9
 */

/**
 * @param {number} num
 * @return {number}
 */
var findIntegers = function(num) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findIntegers("param"), "expect", "Case 1");
assert.deepEqual(findIntegers("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
