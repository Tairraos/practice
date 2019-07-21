/**
 * https://leetcode-cn.com/problems/integer-replacement/
 * 0397.整数替换
 * 难度：中等
 * 
 * 给定一个正整数 n，你可以做如下操作：
 * 1. 如果 n 是偶数，则用 n / 2替换 n。
 * 2. 如果 n 是奇数，则可以用 n + 1或n - 1替换 n。
 * n 变为 1 所需的最小替换次数是多少？
 * 
 * 示例 1：
 * 输入：
 * 8
 * 
 * 输出：
 * 3
 * 
 * 解释：
 * 8 -> 4 -> 2 -> 1
 * 
 * 示例 2：
 * 输入：
 * 7
 * 
 * 输出：
 * 4
 * 
 * 解释：
 * 7 -> 8 -> 4 -> 2 -> 1
 * 或
 * 7 -> 6 -> 3 -> 2 -> 1
 */

/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(integerReplacement("param"), "expect", "caseName");
assert.deepEqual(integerReplacement("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
