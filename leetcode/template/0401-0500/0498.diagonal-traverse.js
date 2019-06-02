/**
 * https://leetcode-cn.com/problems/diagonal-traverse/
 * 0498.对角线遍历
 * 难度：中等
 * 
 * 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。
 * 
 * 示例：
 * 输入：
 * [
 * [ 1, 2, 3 ],
 * [ 4, 5, 6 ],
 * [ 7, 8, 9 ]
 * ]
 * 
 * 输出:  [1,2,4,7,5,3,6,8,9]
 * 
 * 解释：
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0498.png)
 * 
 * 说明：
 *   - 给定矩阵中的元素总数不会超过 100000 。
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(findDiagonalOrder("param"), "expect", "caseName");
assert.deepEqual(findDiagonalOrder("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
