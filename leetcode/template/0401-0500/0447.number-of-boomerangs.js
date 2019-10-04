/**
 * https://leetcode-cn.com/problems/number-of-boomerangs/
 * 0447.回旋镖的数量
 * 难度：容易
 * 
 * 给定平面上 n 对不同的点，“回旋镖” 是由点表示的元组 (i, j, k) ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。
 * 找到所有回旋镖的数量。你可以假设 n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。
 * 
 * 示例：
 * 输入：
 * [[0,0],[1,0],[2,0]]
 * 
 * 输出：
 * 2
 * 
 * 解释：
 * 两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(numberOfBoomerangs("param"), "expect", "Case 1");
assert.deepEqual(numberOfBoomerangs("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
