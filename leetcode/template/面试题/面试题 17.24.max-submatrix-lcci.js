/**
 * https://leetcode-cn.com/problems/max-submatrix-lcci/
 * 面试题 17.24.最大子矩阵
 * 难度：困难
 * 
 * 给定一个正整数和负整数组成的 N &times; M 矩阵，编写代码找出元素总和最大的子矩阵。
 * 
 * 返回一个数组 [r1, c1, r2, c2]，其中 r1, c1 分别代表子矩阵左上角的行号和列号，r2, c2 分别代表右下角的行号和列号。若有多个满足条件的子矩阵，返回任意一个均可。
 * 
 * 注意：本题相对书上原题稍作改动
 * 
 * 示例:
 * 输入:
 * [
 *    [-1,0],
 *    [0,-1]
 * ]
 * 输出: [0,1,0,1]
 * 解释: 输入中标粗的元素即为输出所表示的矩阵
 * 
 * 说明：
 * 
 * 1 <= matrix.length, matrix[0].length <= 200
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var getMaxMatrix = function(matrix) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(getMaxMatrix("param"), "expect", "Case 1");
assert.deepEqual(getMaxMatrix("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
