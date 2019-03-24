/**
 * https://leetcode-cn.com/problems/valid-square/
 * 0593.有效的正方形
 * 难度：中等
 * 
 * 给定二维空间中四点的坐标，返回四点是否可以构造一个正方形。
 * 一个点的坐标（x，y）由一个有两个整数的整数数组表示。
 * 
 * 示例：
 * 输入: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
 * 输出: True
 * 
 * 注意：
 *   - 所有输入整数都在 [-10000，10000] 范围内。
 *   - 一个有效的正方形有四个等长的正长和四个等角（90度角）。
 *   - 输入点没有顺序。
 */

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(validSquare("参数"), "期望结果");
assert.deepEqual(validSquare("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
