/**
 * https://leetcode-cn.com/problems/n-queens/
 * 0051.N皇后
 * 难度：困难
 * 
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * [示意图](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/8-queens.png)
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
console.time("leetcode");

assert.deepEqual(solveNQueens("参数"), "期望结果");
assert.deepEqual(solveNQueens("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
