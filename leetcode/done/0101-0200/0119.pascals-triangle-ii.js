/**
 * https://leetcode-cn.com/problems/pascals-triangle-ii/
 * 0119.杨辉三角 II
 * 难度：容易
 * 
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0118.gif)
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
var getRow = function (rowIndex) {
    let line = [1], zip = (a, b) => a.map((v, i) => v + b[i]);
    while (rowIndex--) line = zip([0, ...line], [...line, 0]);
    return line;
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(getRow(0), [1], "case 0");
assert.deepEqual(getRow(1), [1, 1], "case 1");
assert.deepEqual(getRow(2), [1, 2, 1], "case 2");
assert.deepEqual(getRow(3), [1, 3, 3, 1], "case 3");
assert.deepEqual(getRow(4), [1, 4, 6, 4, 1], "case 4");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");