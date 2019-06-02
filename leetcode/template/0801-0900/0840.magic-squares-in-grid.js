/**
 * https://leetcode-cn.com/problems/magic-squares-in-grid/
 * 0840.矩阵中的幻方
 * 难度：容易
 * 
 * 3 x 3 的幻方是一个填充有从 1 到 9 的不同数字的 3 x 3 矩阵，其中每行，每列以及两条对角线上的各数之和都相等。
 * 给定一个由整数组成的 grid，其中有多少个 3 × 3 的 “幻方” 子矩阵？（每个子矩阵都是连续的）。
 * 
 * 示例：
 * 输入: [[4,3,8,4],
 *       [9,5,1,9],
 *       [2,7,6,2]]
 * 输出: 1
 * 解释：
 * 下面的子矩阵是一个 3 x 3 的幻方：
 * 438
 * 951
 * 276
 * 
 * 而这一个不是：
 * 384
 * 519
 * 762
 * 
 * 总的来说，在本示例所给定的矩阵中只有一个 3 x 3 的幻方子矩阵。
 * 
 * 提示：
 *   - 1 <= grid.length <= 10
 *   - 1 <= grid[0].length <= 10
 *   - 0 <= grid[i][j] <= 15
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(numMagicSquaresInside("param"), "expect", "caseName");
assert.deepEqual(numMagicSquaresInside("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
