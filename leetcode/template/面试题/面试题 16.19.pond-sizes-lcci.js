/**
 * https://leetcode-cn.com/problems/pond-sizes-lcci/
 * 面试题 16.19.水域大小
 * 难度：中等
 * 
 * 你有一个用于表示一片土地的整数矩阵land，该矩阵中每个点的值代表对应地点的海拔高度。若值为0则表示水域。由垂直、水平或对角连接的水域为池塘。池塘的大小是指相连接的水域的个数。编写一个方法来计算矩阵中所有池塘的大小，返回值需要从小到大排序。
 * 示例：
 * 输入：
 * [
 *   [0,2,1,0],
 *   [0,1,0,1],
 *   [1,1,0,1],
 *   [0,1,0,1]
 * ]
 * 输出： [1,2,4]
 * 
 * 提示：
 * 0 
 * 0
 */

/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function(land) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(pondSizes("param"), "expect", "Case 1");
assert.deepEqual(pondSizes("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
