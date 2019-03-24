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
console.time("leetcode");

assert.deepEqual(convertToTitle("参数"), "期望结果");
assert.deepEqual(convertToTitle("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
