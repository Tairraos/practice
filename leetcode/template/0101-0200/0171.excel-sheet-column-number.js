/**
 * https://leetcode-cn.com/problems/excel-sheet-column-number/
 * 0171.Excel表列序号
 * 难度：容易
 * 
 * 给定一个Excel表格中的列名称，返回其相应的列序号。
 * 
 * 例如，
 *     A -> 1
 *     B -> 2
 *     C -> 3
 *     ...
 *     Z -> 26
 *     AA -> 27
 *     AB -> 28
 *     ...
 * 
 * 示例 1：
 * 输入: "A"
 * 输出: 1
 * 
 * 示例 2：
 * 输入: "AB"
 * 输出: 28
 * 
 * 示例 3：
 * 输入: "ZY"
 * 输出: 701
 * 致谢：
 * 特别感谢 [@ts](http://leetcode.com/discuss/user/ts) 添加此问题并创建所有测试用例。
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(titleToNumber("param"), "expect", "Case 1");
assert.deepEqual(titleToNumber("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
