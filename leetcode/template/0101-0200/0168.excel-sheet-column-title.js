/**
 * https://leetcode-cn.com/problems/excel-sheet-column-title/
 * 0168.Excel表列名称
 * 难度：容易
 * 
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 * 
 * 例如，
 *     1 -> A
 *     2 -> B
 *     3 -> C
 *     ...
 *     26 -> Z
 *     27 -> AA
 *     28 -> AB
 *     ...
 * 
 * 示例 1：
 * 输入: 1
 * 输出: "A"
 * 
 * 示例 2：
 * 输入: 28
 * 输出: "AB"
 * 
 * 示例 3：
 * 输入: 701
 * 输出: "ZY"
 */

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(convertToTitle("param"), "expect", "Case 1");
assert.deepEqual(convertToTitle("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
