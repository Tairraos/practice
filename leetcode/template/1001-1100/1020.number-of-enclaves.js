/**
 * https://leetcode-cn.com/problems/number-of-enclaves/
 * 1020.飞地的数量
 * 难度：中等
 * 
 * 给出一个二维数组 A，每个单元格为 0（代表海）或 1（代表陆地）。
 * 
 * 移动是指在陆地上从一个地方走到另一个地方（朝四个方向之一）或离开网格的边界。
 * 
 * 返回网格中无法在任意次数的移动中离开网格边界的陆地单元格的数量。
 * 
 * 示例 1：
 * 输入：[[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
 * 输出：3
 * 解释： 
 * 有三个 1 被 0 包围。一个 1 没有被包围，因为它在边界上。
 * 
 * 示例 2：
 * 输入：[[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
 * 输出：0
 * 解释：
 * 所有 1 都在边界上或可以到达边界。
 * 
 * 提示：
 * 1 <= A.length <= 500
 * 1 <= A[i].length <= 500
 * 0 <= A[i][j] <= 1
 * 所有行的大小都相同
 */

/**
 * @param {number[][]} A
 * @return {number}
 */
var numEnclaves = function(A) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(numEnclaves("参数"), "期望结果");
assert.deepEqual(numEnclaves("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
