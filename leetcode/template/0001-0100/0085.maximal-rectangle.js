/**
 * https://leetcode-cn.com/problems/maximal-rectangle/
 * 0085.最大矩形
 * 难度：困难
 * 
 * 给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
 * 
 * 示例：
 * 输入：
 * [
 *   ["1","0","1","0","0"],
 *   ["1","0","1","1","1"],
 *   ["1","1","1","1","1"],
 *   ["1","0","0","1","0"]
 * ]
 * 输出: 6
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(maximalRectangle("param"), "expect", "caseName");
assert.deepEqual(maximalRectangle("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
