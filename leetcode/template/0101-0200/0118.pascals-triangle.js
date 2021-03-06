/**
 * https://leetcode-cn.com/problems/pascals-triangle/
 * 0118.杨辉三角
 * 难度：容易
 * 
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0118.gif)
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
console.time("Time cost");

assert.deepEqual(generate("param"), "expect", "Case 1");
assert.deepEqual(generate("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
