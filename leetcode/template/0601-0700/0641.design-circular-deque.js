/**
 * https://leetcode-cn.com/problems/design-circular-deque/
 * 0641.设计循环双端队列
 * 难度：中等
 * 
 * 设计实现双端队列。
 * 你的实现需要支持以下操作：
 *   - MyCircularDeque(k)：构造函数,双端队列的大小为k。
 *   - insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true。
 *   - insertLast()：将一个元素添加到双端队列尾部。如果操作成功返回 true。
 *   - deleteFront()：从双端队列头部删除一个元素。 如果操作成功返回 true。
 *   - deleteLast()：从双端队列尾部删除一个元素。如果操作成功返回 true。
 *   - getFront()：从双端队列头部获得一个元素。如果双端队列为空，返回 -1。
 *   - getRear()：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1。
 *   - isEmpty()：检查双端队列是否为空。
 *   - isFull()：检查双端队列是否满了。
 * 
 * 示例：
 * MyCircularDeque circularDeque = new MycircularDeque(3); // 设置容量大小为3
 * circularDeque.insertLast(1);   // 返回 true
 * circularDeque.insertLast(2);   // 返回 true
 * circularDeque.insertFront(3);  // 返回 true
 * circularDeque.insertFront(4);  // 已经满了，返回 false
 * circularDeque.getRear();       // 返回 2
 * circularDeque.isFull();        // 返回 true
 * circularDeque.deleteLast();    // 返回 true
 * circularDeque.insertFront(4);  // 返回 true
 * circularDeque.getFront();      // 返回 4
 * 
 * 提示：
 *   - 所有值的范围为 [1, 1000]
 *   - 操作次数的范围为 [1, 1000]
 *   - 请不要使用内置的双端队列库。
 */

/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = Object.create(MyCircularDeque).createNew(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(MyCircularDeque("参数"), "期望结果");
assert.deepEqual(MyCircularDeque("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
