/**
 * https://leetcode-cn.com/problems/complex-number-multiplication/
 * 0537.复数乘法
 * 难度：中等
 * 
 * 给定两个表示[复数](https://baike.baidu.com/item/%E5%A4%8D%E6%95%B0)的字符串。
 * 返回表示它们乘积的字符串。注意，根据定义 i^2 = -1 。
 * 
 * 示例 1：
 * 输入: "1+1i", "1+1i"
 * 输出: "0+2i"
 * 解释: (1 + i) * (1 + i) = 1 + i^2 + 2 * i = 2i ，你需要将它转换为 0+2i 的形式。
 * 
 * 示例 2：
 * 输入: "1+-1i", "1+-1i"
 * 输出: "0+-2i"
 * 解释: (1 - i) * (1 - i) = 1 + i^2 - 2 * i = -2i ，你需要将它转换为 0+-2i 的形式。
 * 
 * 注意：
 *   - 输入字符串不包含额外的空格。
 *   - 输入字符串将以 a+bi 的形式给出，其中整数 a 和 b 的范围均在 [-100, 100] 之间。输出也应当符合这种形式。
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(complexNumberMultiply("param"), "expect", "Case 1");
assert.deepEqual(complexNumberMultiply("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
