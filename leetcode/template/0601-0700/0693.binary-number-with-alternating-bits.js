/**
 * https://leetcode-cn.com/problems/binary-number-with-alternating-bits/
 * 0693.交替位二进制数
 * 难度：容易
 * 
 * 给定一个正整数，检查他是否为交替位二进制数：换句话说，就是他的二进制数相邻的两个位数永不相等。
 * 
 * 示例 1：
 * 输入: 5
 * 输出: True
 * 解释：
 * 5的二进制数是: 101
 * 
 * 示例 2：
 * 输入: 7
 * 输出: False
 * 解释：
 * 7的二进制数是: 111
 * 
 * 示例 3：
 * 输入: 11
 * 输出: False
 * 解释：
 * 11的二进制数是: 1011
 * 
 * 示例 4：
 * 输入: 10
 * 输出: True
 * 解释：
 * 10的二进制数是: 1010
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(hasAlternatingBits("param"), "expect", "caseName");
assert.deepEqual(hasAlternatingBits("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
