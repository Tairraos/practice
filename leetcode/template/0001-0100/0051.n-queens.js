/**
 * https://leetcode-cn.com/problems/n-queens/
 * 0051.N皇后
 * 难度：困难
 * 
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0051.png)
 * 上图为 8 皇后问题的一种解法。
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 
 * 示例：
 * 输入: 4
 * 输出: [
 * [".Q..",  // 解法 1
 *   "...Q",
 *   "Q...",
 *   "..Q."],
 * 
 * ["..Q.",  // 解法 2
 *   "Q...",
 *   "...Q",
 *   ".Q.."]
 * ]
 * 解释: 4 皇后问题存在两个不同的解法。
 */

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(solveNQueens("param"), "expect", "Case 1");
assert.deepEqual(solveNQueens("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
