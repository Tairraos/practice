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
var findDiagonalOrder = function (matrix) {
    //矩阵宽/高, 对线的x,y起始点
    let [w, h, sx, sy, result] = [matrix.length ? matrix[0].length : 0, matrix.length, 0, 0, []];
    while (sx < w && sy < h) { // 起始点在矩阵内部则开始
        let [x, y, line] = [sx, sy, []];
        while (x >= 0 && y < h) line.push(matrix[y++][x--]); //把对角线取出来
        result.push(...((sx + sy) % 2) ? line : line.reverse()); //根据方向决定要不要倒转序列，然后加到结果集里
        [sx, sy] = sx < w - 1 ? [sx + 1, sy] : [sx, sy + 1]; //下一个起始点
    }
    return result;
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findDiagonalOrder([]), [], "case 1.1");
assert.deepEqual(findDiagonalOrder([
    []
]), [], "case 1.2");
assert.deepEqual(findDiagonalOrder([
    [1]
]), [1], "case 1.3");
assert.deepEqual(findDiagonalOrder([
    [1, 2]
]), [1, 2], "case 12");
assert.deepEqual(findDiagonalOrder([
    [1],
    [2]
]), [1, 2], "case 12");
assert.deepEqual(findDiagonalOrder([
    [1, 2],
    [3, 4]
]), [1, 2, 3, 4], "case 1234");
assert.deepEqual(findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6]
]), [1, 2, 4, 5, 3, 6], "case 124536");
assert.deepEqual(findDiagonalOrder([
    [1, 2],
    [3, 4],
    [5, 6]
]), [1, 2, 3, 5, 4, 6], "case 123546");
assert.deepEqual(findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]), [1, 2, 4, 7, 5, 3, 6, 8, 9], "case 124753689");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");