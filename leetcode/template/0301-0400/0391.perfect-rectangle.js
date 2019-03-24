/**
 * https://leetcode-cn.com/problems/perfect-rectangle/
 * 0391.完美矩形
 * 难度：困难
 * 
 * 我们有 N 个与坐标轴对齐的矩形, 其中 N > 0, 判断它们是否能精确地覆盖一个矩形区域。
 * 每个矩形用左下角的点和右上角的点的坐标来表示。例如， 一个单位正方形可以表示为 [1,1,2,2]。 ( 左下角的点的坐标为 (1, 1) 以及右上角的点的坐标为 (2, 2) )。
 * [示意图](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rectangle_perfect.gif)
 * 
 * 示例 1：
 * rectangles = [
 *   [1,1,3,3],
 *   [3,1,4,2],
 *   [3,2,4,4],
 *   [1,3,2,4],
 *   [2,3,3,4]
 * ]
 * 
 * 返回 true。5个矩形一起可以精确地覆盖一个矩形区域。
 * 
 * [示意图](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rectangle_separated.gif)
 * 
 * 示例 2：
 * rectangles = [
 *   [1,1,2,3],
 *   [1,3,2,4],
 *   [3,1,4,2],
 *   [3,2,4,4]
 * ]
 * 
 * 返回 false。两个矩形之间有间隔，无法覆盖成一个矩形。
 * 
 * [示意图](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rectangle_hole.gif)
 * 
 * 示例 3：
 * rectangles = [
 *   [1,1,3,3],
 *   [3,1,4,2],
 *   [1,3,2,4],
 *   [3,2,4,4]
 * ]
 * 
 * 返回 false。图形顶端留有间隔，无法覆盖成一个矩形。
 * 
 * [示意图](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rectangle_intersect.gif)
 * 
 * 示例 4：
 * rectangles = [
 *   [1,1,3,3],
 *   [3,1,4,2],
 *   [1,3,2,4],
 *   [2,2,4,4]
 * ]
 * 
 * 返回 false。因为中间有相交区域，虽然形成了矩形，但不是精确覆盖。
 */

/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(isRectangleCover("参数"), "期望结果");
assert.deepEqual(isRectangleCover("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
