/**
 * https://leetcode-cn.com/problems/erect-the-fence/
 * 0587.安装栅栏
 * 难度：困难
 * 
 * 在一个二维的花园中，有一些用 (x, y) 坐标表示的树。由于安装费用十分昂贵，你的任务是先用最短的绳子围起所有的树。只有当所有的树都被绳子包围时，花园才能围好栅栏。你需要找到正好位于栅栏边界上的树的坐标。
 * 
 * 示例 1：
 * 输入: [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]
 * 输出: [[1,1],[2,0],[4,2],[3,3],[2,4]]
 * 解释：
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0587-1.png)
 * 
 * 示例 2：
 * 输入: [[1,2],[2,2],[4,2]]
 * 输出: [[1,2],[2,2],[4,2]]
 * 解释：
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0587-2.png)
 * 即使树都在一条直线上，你也需要先用绳子包围它们。
 * 
 * 注意：
 *   - 所有的树应当被围在一起。你不能剪断绳子来包围树或者把树分成一组以上。
 *   - 输入的整数在 0 到 100 之间。
 *   - 花园至少有一棵树。
 *   - 所有树的坐标都是不同的。
 *   - 输入的点没有顺序。输出顺序也没有要求。
 */

/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {Point[]}
 */
var outerTrees = function(points) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(outerTrees("param"), "expect", "caseName");
assert.deepEqual(outerTrees("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
