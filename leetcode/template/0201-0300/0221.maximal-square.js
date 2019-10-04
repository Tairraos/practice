/**
 * https://leetcode-cn.com/problems/maximal-square/
 * 0221.最大正方形
 * 难度：中等
 * 
 * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
 * 
 * 示例：
 * 输入：
 * 
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * 
 * 输出: 4
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(maximalSquare("param"), "expect", "Case 1");
assert.deepEqual(maximalSquare("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
