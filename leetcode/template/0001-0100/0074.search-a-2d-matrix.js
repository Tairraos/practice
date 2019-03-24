/**
 * https://leetcode-cn.com/problems/search-a-2d-matrix/
 * 0074.搜索二维矩阵
 * 难度：中等
 * 
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 *   - 每行中的整数从左到右按升序排列。
 *   - 每行的第一个整数大于前一行的最后一个整数。
 * 
 * 示例 1：
 * 输入：
 * matrix = [
 *   [1,   3,  5,  7],
 *   [10, 11, 16, 20],
 *   [23, 30, 34, 50]
 * ]
 * target = 3
 * 输出: true
 * 
 * 示例 2：
 * 输入：
 * matrix = [
 *   [1,   3,  5,  7],
 *   [10, 11, 16, 20],
 *   [23, 30, 34, 50]
 * ]
 * target = 13
 * 输出: false
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(searchMatrix("参数"), "期望结果");
assert.deepEqual(searchMatrix("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
