/**
 * https://leetcode-cn.com/problems/minimum-time-difference/
 * 0539.最小时间差
 * 难度：中等
 * 
 * 给定一个 24 小时制（小时:分钟）的时间列表，找出列表中任意两个时间的最小时间差并已分钟数表示。
 * 
 * 示例 1：
 * 输入: ["23:59","00:00"]
 * 输出: 1
 * 
 * 备注：
 *   - 列表中时间数在 2~20000 之间。
 *   - 每个时间取值在 00:00~23:59 之间。
 */

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findMinDifference("param"), "expect", "caseName");
assert.deepEqual(findMinDifference("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
