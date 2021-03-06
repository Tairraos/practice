/**
 * https://leetcode-cn.com/problems/data-stream-as-disjoint-intervals/
 * 0352.将数据流变为多个不相交区间
 * 难度：困难
 * 
 * 给定一个非负整数的数据流输入 a1，a2，…，an，…，将到目前为止看到的数字总结为不相交的区间列表。
 * 
 * 例如，假设数据流中的整数为 1，3，7，2，6，…，每次的总结为：
 * [1, 1]
 * [1, 1], [3, 3]
 * [1, 1], [3, 3], [7, 7]
 * [1, 3], [7, 7]
 * [1, 3], [6, 7]
 * 
 * 进阶：
 * 如果有很多合并，并且与数据流的大小相比，不相交区间的数量很小，该怎么办?
 * 提示：
 * 特别感谢 [@yunhong](https://discuss.leetcode.com/user/yunhong) 提供了本问题和其测试用例。
 */

/**
 * Initialize your data structure here.
 */
var SummaryRanges = function() {
    
};

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
    
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(SummaryRanges("param"), "expect", "Case 1");
assert.deepEqual(SummaryRanges("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
