/**
 * https://leetcode-cn.com/problems/spiral-matrix/
 * 0054.螺旋矩阵
 * 难度：中等
 * 
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 * 
 * 示例 1：
 * 输入：
 * [
 * [1, 2, 3],
 * [4, 5, 6],
 * [7, 8, 9]
 * ]
 * 输出: [1, 2, 3, 6, 9, 8, 7, 4, 5]
 * 
 * 示例 2：
 * 输入：
 * [
 *   [1, 2,  3,  4 ],
 *   [5, 6,  7,  8 ],
 *   [9, 10, 11, 12]
 * ]
 * 输出: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    //矩阵宽/高, x,y指针
    let [w, h, px, py, result] = [matrix.length ? matrix[0].length : 0, matrix.length, 0, 0, []];
    let d=[[1, 0], [0, 1], [-1, 0], [0, -1]]; //方向，向右，向下，向左，向上
    while (result.length < w * h) {
        result.push(matrix[py].splice(px, 1, undefined)[0]); //把当前指针位置的值压入 result 并且清空原位置
        if (matrix[py + d[0][1]] === undefined || matrix[py + d[0][1]][px + d[0][0]] === undefined)
            d.push(d.shift()); //如果遇到undefined，方向转90度
        [px, py] = [px + d[0][0], py + d[0][1]]; //指针
    }
    return result;
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(spiralOrder([]), [], "case 1.1");
assert.deepEqual(spiralOrder([
    []
]), [], "case 1.2");
assert.deepEqual(spiralOrder([
    [1]
]), [1], "case 1.3");
assert.deepEqual(spiralOrder([
    [1, 2]
]), [1, 2], "case 12");
assert.deepEqual(spiralOrder([
    [1, 2, 3],
    [4, 5, 6]
]), [1, 2, 3, 6, 5, 4], "case 123654");
assert.deepEqual(spiralOrder([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
]), [1, 2, 4, 6, 8, 7, 5, 3], "case 12468753");
assert.deepEqual(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]), [1, 2, 3, 6, 9, 8, 7, 4, 5], "case 123698745");
assert.deepEqual(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]), [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7], "case 123481211109567");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");