/**
 * https://leetcode-cn.com/problems/valid-boomerang/
 * 1037.有效的回旋镖
 * 难度：容易
 * 
 * 回旋镖定义为一组三个点，这些点各不相同且不在一条直线上。
 * 
 * 给出平面上三个点组成的列表，判断这些点是否可以构成回旋镖。
 * 
 * 示例 1：
 * 输入：[[1,1],[2,3],[3,2]]
 * 输出：true
 * 
 * 示例 2：
 * 输入：[[1,1],[2,2],[3,3]]
 * 输出：false
 * 
 * 提示：
 * points.length == 3
 * points[i].length == 2
 * 0 <= points[i][j] <= 100
 */

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(isBoomerang("param"), "expect", "Case 1");
assert.deepEqual(isBoomerang("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
