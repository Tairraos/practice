/**
 * https://leetcode-cn.com/problems/sorted-matrix-search-lcci/
 * 面试题 10.09.排序矩阵查找
 * 难度：中等
 * 
 * 给定M&times;N矩阵，每一行、每一列都按升序排列，请编写代码找出某元素。
 * 
 * 示例:
 * 现有矩阵 matrix 如下：
 * 
 * [
 *   [1,   4,  7, 11, 15],
 *   [2,   5,  8, 12, 19],
 *   [3,   6,  9, 16, 22],
 *   [10, 13, 14, 17, 24],
 *   [18, 21, 23, 26, 30]
 * ]
 * 
 * 给定 target = 5，返回 true。
 * 
 * 给定 target = 20，返回 false。
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
console.time("Time cost");

assert.deepEqual(searchMatrix("param"), "expect", "Case 1");
assert.deepEqual(searchMatrix("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
