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
 * [示意图](https://ibb.co/mYSFJT)[示意图](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/06/22/reflection.png)
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
console.time("leetcode");

assert.deepEqual(mirrorReflection("参数"), "期望结果");
assert.deepEqual(mirrorReflection("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
