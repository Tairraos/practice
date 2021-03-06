/**
 * https://leetcode-cn.com/problems/n-queens-ii/
 * 0052.N皇后 II
 * 难度：困难
 * 
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0051.png)
 * 上图为 8 皇后问题的一种解法。
 * 给定一个整数 n，返回 n 皇后不同的解决方案的数量。
 * 
 * 示例：
 * 输入: 4
 * 输出: 2
 * 解释: 4 皇后问题存在如下两个不同的解法。
 * [
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
 */

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(totalNQueens("param"), "expect", "Case 1");
assert.deepEqual(totalNQueens("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
