/**
 * https://leetcode-cn.com/problems/merge-intervals/
 * 0056.合并区间
 * 难度：中等
 * 
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 
 * 示例 1：
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 示例 2：
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(merge("参数"), "期望结果");
assert.deepEqual(merge("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
