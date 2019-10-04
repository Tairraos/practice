/**
 * https://leetcode-cn.com/problems/rectangle-area/
 * 0223.矩形面积
 * 难度：中等
 * 
 * 在二维平面上计算出两个由直线构成的矩形重叠后形成的总面积。
 * 每个矩形由其左下顶点和右上顶点坐标表示，如图所示。
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0223.png)
 * 
 * 示例：
 * 输入: -3, 0, 3, 4, 0, -1, 9, 2
 * 输出: 45
 * 
 * 说明: 假设矩形面积不会超出 int 的范围。
 */

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(computeArea("param"), "expect", "Case 1");
assert.deepEqual(computeArea("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
