/**
 * https://leetcode-cn.com/problems/minimum-area-rectangle/
 * 0939.最小面积矩形
 * 难度：中等
 * 
 * 给定在 xy 平面上的一组点，确定由这些点组成的矩形的最小面积，其中矩形的边平行于 x 轴和 y 轴。
 * 如果没有任何矩形，就返回 0。
 * 
 * 示例 1：
 * 输入：[[1,1],[1,3],[3,1],[3,3],[2,2]]
 * 输出：4
 * 
 * 示例 2：
 * 输入：[[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
 * 输出：2
 * 
 * 提示：
 *   - 1 <= points.length <= 500
 *   - 0 <= points[i][0] <= 40000
 *   - 0 <= points[i][1] <= 40000
 *   - 所有的点都是不同的。
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(minAreaRect("param"), "expect", "caseName");
assert.deepEqual(minAreaRect("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
