/**
 * https://leetcode-cn.com/problems/sort-the-matrix-diagonally/
 * 1329.将矩阵按对角线排序
 * 难度：中等
 * 
 * 给你一个 m * n 的整数矩阵 mat ，请你将同一条对角线上的元素（从左上到右下）按升序排序后，返回排好序的矩阵。
 * 
 * 示例 1：
 * 输入：mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
 * 输出：[[1,1,1,1],[1,2,2,2],[1,2,3,3]]
 * 
 * 提示：
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 100
 * 1 <= mat[i][j] <= 100
 */

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(diagonalSort("param"), "expect", "Case 1");
assert.deepEqual(diagonalSort("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
