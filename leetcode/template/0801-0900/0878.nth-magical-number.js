/**
 * https://leetcode-cn.com/problems/nth-magical-number/
 * 0878.第 N 个神奇数字
 * 难度：困难
 * 
 * 如果正整数可以被 A 或 B 整除，那么它是神奇的。
 * 返回第 N 个神奇数字。由于答案可能非常大，返回它模 10^9 + 7 的结果。
 * 
 * 示例 1：
 * 输入：N = 1, A = 2, B = 3
 * 输出：2
 * 
 * 示例 2：
 * 输入：N = 4, A = 2, B = 3
 * 输出：6
 * 
 * 示例 3：
 * 输入：N = 5, A = 2, B = 4
 * 输出：10
 * 
 * 示例 4：
 * 输入：N = 3, A = 6, B = 4
 * 输出：8
 * 
 * 提示：
 *   - 1 <= N <= 10^9
 *   - 2 <= A <= 40000
 *   - 2 <= B <= 40000
 */

/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var nthMagicalNumber = function(N, A, B) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(nthMagicalNumber("参数"), "期望结果");
assert.deepEqual(nthMagicalNumber("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
