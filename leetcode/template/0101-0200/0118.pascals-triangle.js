/**
 * https://leetcode-cn.com/problems/pascals-triangle/
 * 0118.杨辉三角
 * 难度：容易
 * 
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * [示意图](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例：
 * 输入: 5
 * 输出：
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 * [1,4,6,4,1]
 * ]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(generate("参数"), "期望结果");
assert.deepEqual(generate("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
