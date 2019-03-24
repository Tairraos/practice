/**
 * https://leetcode-cn.com/problems/kth-smallest-number-in-multiplication-table/
 * 0668.乘法表中第k小的数
 * 难度：困难
 * 
 * 几乎每一个人都用 [乘法表](https://baike.baidu.com/item/%E4%B9%98%E6%B3%95%E8%A1%A8)。但是你能在乘法表中快速找到第k小的数字吗？
 * 给定高度m 、宽度n 的一张 m * n的乘法表，以及正整数k，你需要返回表中第k 小的数字。
 * 例 1：
 * 输入: m = 3, n = 3, k = 5
 * 输出: 3
 * 解释：
 * 乘法表：
 * 1  2  3
 * 2  4  6
 * 3  6  9
 * 
 * 第5小的数字是 3 (1, 2, 2, 3, 3).
 * 
 * 例 2：
 * 输入: m = 2, n = 3, k = 6
 * 输出: 6
 * 解释：
 * 乘法表：
 * 1  2  3
 * 2  4  6
 * 
 * 第6小的数字是 6 (1, 2, 2, 3, 4, 6).
 * 
 * 注意：
 *   - m 和 n 的范围在 [1, 30000] 之间。
 *   - k 的范围在 [1, m * n] 之间。
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(findKthNumber("参数"), "期望结果");
assert.deepEqual(findKthNumber("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
