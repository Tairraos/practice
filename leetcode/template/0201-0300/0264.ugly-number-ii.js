/**
 * https://leetcode-cn.com/problems/ugly-number-ii/
 * 0264.丑数 II
 * 难度：中等
 * 
 * 编写一个程序，找出第 n 个丑数。
 * 丑数就是只包含质因数 2, 3, 5 的正整数。
 * 
 * 示例：
 * 输入: n = 10
 * 输出: 12
 * 解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
 * 
 * 说明：
 *   - 1 是丑数。
 *   - n 不超过1690。
 */

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(nthUglyNumber("param"), "expect", "caseName");
assert.deepEqual(nthUglyNumber("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
