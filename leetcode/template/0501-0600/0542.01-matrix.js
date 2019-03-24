/**
 * https://leetcode-cn.com/problems/01-matrix/
 * 0542.01 矩阵
 * 难度：中等
 * 
 * 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
 * 两个相邻元素间的距离为 1 。
 * 
 * 示例 1：
 * 输入：
 * 0 0 0
 * 0 1 0
 * 0 0 0
 * 
 * 输出：
 * 0 0 0
 * 0 1 0
 * 0 0 0
 * 
 * 示例 2：
 * 输入：
 * 0 0 0
 * 0 1 0
 * 1 1 1
 * 
 * 输出：
 * 0 0 0
 * 0 1 0
 * 1 2 1
 * 
 * 注意：
 *   - 给定矩阵的元素个数不超过 10000。
 *   - 给定矩阵中至少有一个元素是 0。
 *   - 矩阵中的元素只在四个方向上相邻: 上、下、左、右。
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(updateMatrix("参数"), "期望结果");
assert.deepEqual(updateMatrix("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
