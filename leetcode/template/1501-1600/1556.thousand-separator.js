/**
 * https://leetcode-cn.com/problems/thousand-separator/
 * 1556.千位分隔数
 * 难度：容易
 * 
 * 给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。
 * 
 * 示例 1：
 * 输入：n = 987
 * 输出："987"
 * 
 * 示例 2：
 * 输入：n = 1234
 * 输出："1.234"
 * 
 * 示例 3：
 * 输入：n = 123456789
 * 输出："123.456.789"
 * 
 * 示例 4：
 * 输入：n = 0
 * 输出："0"
 * 
 * 提示：
 * 0 <= n < 2^31
 */

/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(thousandSeparator("param"), "expect", "Case 1");
assert.deepEqual(thousandSeparator("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
