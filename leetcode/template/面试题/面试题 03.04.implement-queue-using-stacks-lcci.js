/**
 * https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/
 * 面试题 03.04.化栈为队
 * 难度：容易
 * 
 * 实现一个MyQueue类，该类用两个栈来实现一个队列。示例：MyQueue queue = new MyQueue();queue.push(1);queue.push(2);queue.peek();  // 返回 1queue.pop();   // 返回 1queue.empty(); // 返回 false说明：你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size 和 is empty 操作是合法的。你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。
 */

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {

};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {

};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {

};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {

};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {

};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(MyQueue("param"), "expect", "Case 1");
assert.deepEqual(MyQueue("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
