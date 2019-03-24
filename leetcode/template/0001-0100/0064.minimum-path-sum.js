/**
 * https://leetcode-cn.com/problems/minimum-path-sum/
 * 0064.最小路径和
 * 难度：中等
 * 
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 示例：
 * 输入：
 * [
 *   [1,3,1],
 *   [1,5,1],
 *   [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(minPathSum("参数"), "期望结果");
assert.deepEqual(minPathSum("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
