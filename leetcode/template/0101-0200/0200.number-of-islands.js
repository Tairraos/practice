/**
 * https://leetcode-cn.com/problems/number-of-islands/
 * 0200.岛屿的个数
 * 难度：中等
 * 
 * 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。
 * 
 * 示例 1：
 * 输入：
 * 11110
 * 11010
 * 11000
 * 00000
 * 
 * 输出: 1
 * 
 * 示例 2：
 * 输入：
 * 11000
 * 11000
 * 00100
 * 00011
 * 
 * 输出: 3
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(numIslands("param"), "expect", "Case 1");
assert.deepEqual(numIslands("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
