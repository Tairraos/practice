/**
 * https://leetcode-cn.com/problems/find-median-from-data-stream/
 * 0295.数据流的中位数
 * 难度：困难
 * 
 * 中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。
 * 
 * 例如，
 * [2,3,4] 的中位数是 3
 * [2,3] 的中位数是 (2 + 3) / 2 = 2.5
 * 设计一个支持以下两种操作的数据结构：
 *   - void addNum(int num) - 从数据流中添加一个整数到数据结构中。
 *   - double findMedian() - 返回目前所有元素的中位数。
 * 
 * 示例：
 * addNum(1)
 * addNum(2)
 * findMedian() -> 1.5
 * addNum(3)
 * findMedian() -> 2
 * 
 * 进阶：
 *   - 如果数据流中所有整数都在 0 到 100 范围内，你将如何优化你的算法？
 *   - 如果数据流中 99% 的整数都在 0 到 100 范围内，你将如何优化你的算法？
 */

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = Object.create(MedianFinder).createNew()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(MedianFinder("param"), "expect", "caseName");
assert.deepEqual(MedianFinder("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
