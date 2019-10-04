/**
 * https://leetcode-cn.com/problems/mirror-reflection/
 * 0858.镜面反射
 * 难度：中等
 * 
 * 有一个特殊的正方形房间，每面墙上都有一面镜子。除西南角以外，每个角落都放有一个接受器，编号为 0， 1，以及 2。
 * 正方形房间的墙壁长度为 p，一束激光从西南角射出，首先会与东墙相遇，入射点到接收器 0 的距离为 q 。
 * 返回光线最先遇到的接收器的编号（保证光线最终会遇到一个接收器）。
 * 
 * 示例：
 * 输入： p = 2, q = 1
 * 输出： 2
 * 解释： 这条光线在第一次被反射回左边的墙时就遇到了接收器 2 。
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0858.png)
 * 
 * 提示：
 *   - 1 <= p <= 1000
 *   - 0 <= q <= p
 */

/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function(p, q) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(mirrorReflection("param"), "expect", "Case 1");
assert.deepEqual(mirrorReflection("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
