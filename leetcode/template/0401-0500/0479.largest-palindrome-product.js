/**
 * https://leetcode-cn.com/problems/largest-palindrome-product/
 * 0479.最大回文数乘积
 * 难度：困难
 * 
 * 你需要找到由两个 n 位数的乘积组成的最大回文数。
 * 由于结果会很大，你只需返回最大回文数 mod 1337得到的结果。
 * 
 * 示例：
 * 输入: 2
 * 输出: 987
 * 解释: 99 x 91 = 9009, 9009 % 1337 = 987
 * 
 * 说明：
 * n 的取值范围为 [1,8]。
 */

/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function(n) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(largestPalindrome("param"), "expect", "Case 1");
assert.deepEqual(largestPalindrome("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
