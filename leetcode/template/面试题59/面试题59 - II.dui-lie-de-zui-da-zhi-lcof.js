/**
 * https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/
 * 面试题59 - II.队列的最大值
 * 难度：中等
 * 
 * 请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。
 * 
 * 若队列为空，pop_front 和 max_value 需要返回 -1
 * 
 * 示例 1：
 * 输入: 
 * ["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
 * [[],[1],[2],[],[],[]]
 * 输出: [null,null,null,2,1,2]
 * 
 * 示例 2：
 * 输入: 
 * ["MaxQueue","pop_front","max_value"]
 * [[],[],[]]
 * 输出: [null,-1,-1]
 * 
 * 限制：
 * 
 * 1 <= push_back,pop_front,max_value的总操作数 <= 10000
 * 1 <= value <= 10^5
 */


var MaxQueue = function() {

};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {

};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {

};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {

};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(MaxQueue("param"), "expect", "Case 1");
assert.deepEqual(MaxQueue("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
