/**
 * https://leetcode-cn.com/problems/strange-printer-ii/
 * 1591.奇怪的打印机 II
 * 难度：困难
 * 
 * 给你一个奇怪的打印机，它有如下两个特殊的打印规则：
 * 
 * 每一次操作时，打印机会用同一种颜色打印一个矩形的形状，每次打印会覆盖矩形对应格子里原本的颜色。
 * 一旦矩形根据上面的规则使用了一种颜色，那么 相同的颜色不能再被使用 。
 * 
 * 给你一个初始没有颜色的 m x n 的矩形 targetGrid ，其中 targetGrid[row][col] 是位置 (row, col) 的颜色。
 * 
 * 如果你能按照上述规则打印出矩形 targetGrid ，请你返回 true ，否则返回 false 。
 * 
 * 示例 1：
 * 输入：targetGrid = [[1,1,1,1],[1,2,2,1],[1,2,2,1],[1,1,1,1]]
 * 输出：true
 * 
 * 示例 2：
 * 输入：targetGrid = [[1,1,1,1],[1,1,3,3],[1,1,3,4],[5,5,1,4]]
 * 输出：true
 * 
 * 示例 3：
 * 输入：targetGrid = [[1,2,1],[2,1,2],[1,2,1]]
 * 输出：false
 * 解释：没有办法得到 targetGrid ，因为每一轮操作使用的颜色互不相同。
 * 
 * 示例 4：
 * 输入：targetGrid = [[1,1,1],[3,1,3]]
 * 输出：false
 * 
 * 提示：
 * m == targetGrid.length
 * n == targetGrid[i].length
 * 1 <= m, n <= 60
 * 1 <= targetGrid[row][col] <= 60
 */

/**
 * @param {number[][]} targetGrid
 * @return {boolean}
 */
var isPrintable = function(targetGrid) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(isPrintable("param"), "expect", "Case 1");
assert.deepEqual(isPrintable("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
