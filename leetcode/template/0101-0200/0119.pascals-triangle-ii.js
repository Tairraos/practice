/**
 * https://leetcode-cn.com/problems/pascals-triangle-ii/
 * 0119.杨辉三角 II
 * 难度：容易
 * 
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * [示意图](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例：
 * 输入: 3
 * 输出: [1,3,3,1]
 * 
 * 进阶：
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(getRow("参数"), "期望结果");
assert.deepEqual(getRow("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
