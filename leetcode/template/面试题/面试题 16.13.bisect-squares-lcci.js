/**
 * https://leetcode-cn.com/problems/bisect-squares-lcci/
 * 面试题 16.13.平分正方形
 * 难度：中等
 * 
 * 给定两个正方形及一个二维平面。请找出将这两个正方形分割成两半的一条直线。假设正方形顶边和底边与 x 轴平行。
 * 
 * 每个正方形的数据square包含3个数值，正方形的左下顶点坐标[X,Y] = [square[0],square[1]]，以及正方形的边长square[2]。所求直线穿过两个正方形会形成4个交点，请返回4个交点形成线段的两端点坐标（两个端点即为4个交点中距离最远的2个点，这2个点所连成的线段一定会穿过另外2个交点）。2个端点坐标[X1,Y1]和[X2,Y2]的返回格式为{X1,Y1,X2,Y2}，要求若X1 != X2，需保证X1 < X2，否则需保证Y1 <= Y2。
 * 
 * 若同时有多条直线满足要求，则选择斜率最大的一条计算并返回（与Y轴平行的直线视为斜率无穷大）。
 * 
 * 示例：
 * 输入：
 * square1 = {-1, -1, 2}
 * square2 = {0, -1, 2}
 * 输出： {-1,0,2,0}
 * 解释： 直线 y = 0 能将两个正方形同时分为等面积的两部分，返回的两线段端点为[-1,0]和[2,0]
 * 
 * 提示：
 * square.length == 3
 * square[2] > 0
 */

/**
 * @param {number[]} square1
 * @param {number[]} square2
 * @return {number[]}
 */
var cutSquares = function(square1, square2) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(cutSquares("param"), "expect", "Case 1");
assert.deepEqual(cutSquares("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
