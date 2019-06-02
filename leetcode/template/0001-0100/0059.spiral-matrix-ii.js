/**
 * https://leetcode-cn.com/problems/spiral-matrix-ii/
 * 0059.螺旋矩阵 II
 * 难度：中等
 * 
 * 给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
 * 
 * 示例：
 * 输入: 3
 * 输出：
 * [
 * [ 1, 2, 3 ],
 * [ 8, 9, 4 ],
 * [ 7, 6, 5 ]
 * ]
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(generateMatrix("param"), "expect", "caseName");
assert.deepEqual(generateMatrix("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
