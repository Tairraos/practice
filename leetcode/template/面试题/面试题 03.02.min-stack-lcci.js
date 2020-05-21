/**
 * https://leetcode-cn.com/problems/min-stack-lcci/
 * 面试题 03.02.栈的最小值
 * 难度：容易
 * 
 * 请设计一个栈，除了常规栈支持的pop与push函数以外，还支持min函数，该函数返回栈元素中的最小值。执行push、pop和min操作的时间复杂度必须为O(1)。示例：MinStack minStack = new MinStack();minStack.push(-2);minStack.push(0);minStack.push(-3);minStack.getMin();   --> 返回 -3.minStack.pop();minStack.top();      --> 返回 0.minStack.getMin();   --> 返回 -2.
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {

};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(MinStack("param"), "expect", "Case 1");
assert.deepEqual(MinStack("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
