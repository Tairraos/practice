/**
 * https://leetcode-cn.com/problems/set-matrix-zeroes/
 * 0073.矩阵置零
 * 难度：中等
 * 
 * 给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用[原地](http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)算法。
 * 
 * 示例 1：
 * 输入：
 * [
 *   [1,1,1],
 *   [1,0,1],
 *   [1,1,1]
 * ]
 * 输出：
 * [
 *   [1,0,1],
 *   [0,0,0],
 *   [1,0,1]
 * ]
 * 
 * 示例 2：
 * 输入：
 * [
 *   [0,1,2,0],
 *   [3,4,5,2],
 *   [1,3,1,5]
 * ]
 * 输出：
 * [
 *   [0,0,0,0],
 *   [0,4,5,0],
 *   [0,3,1,0]
 * ]
 * 
 * 进阶：
 *   - 一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
 *   - 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
 *   - 你能想出一个常数空间的解决方案吗？
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(setZeroes("参数"), "期望结果");
assert.deepEqual(setZeroes("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
