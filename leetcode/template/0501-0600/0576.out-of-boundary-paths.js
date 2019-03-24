/**
 * https://leetcode-cn.com/problems/out-of-boundary-paths/
 * 0576.出界的路径数
 * 难度：中等
 * 
 * 给定一个 m × n 的网格和一个球。球的起始坐标为 (i,j) ，你可以将球移到相邻的单元格内，或者往上、下、左、右四个方向上移动使球穿过网格边界。但是，你最多可以移动 N 次。找出可以将球移出边界的路径数量。答案可能非常大，返回 结果 mod 10^9 + 7 的值。
 * 
 * 示例 1：
 * 输入: m = 2, n = 2, N = 2, i = 0, j = 0
 * 输出: 6
 * 解释：
 * [示意图](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/out_of_boundary_paths_1.png)
 * 
 * 示例 2：
 * 输入: m = 1, n = 3, N = 3, i = 0, j = 1
 * 输出: 12
 * 解释：
 * [示意图](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/out_of_boundary_paths_2.png)
 * 
 * 说明：
 *   - 球一旦出界，就不能再被移动回网格内。
 *   - 网格的长度和高度在 [1,50] 的范围内。
 *   - N 在 [0,50] 的范围内。
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var findPaths = function(m, n, N, i, j) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(findPaths("参数"), "期望结果");
assert.deepEqual(findPaths("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
