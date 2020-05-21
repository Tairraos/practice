/**
 * https://leetcode-cn.com/problems/peeking-iterator/
 * 0284.顶端迭代器
 * 难度：中等
 * 
 * 给定一个迭代器类的接口，接口包含两个方法： next() 和 hasNext()。设计并实现一个支持 peek() 操作的顶端迭代器 -- 其本质就是把原本应由 next() 方法返回的元素 peek() 出来。
 * 
 * 示例:
 * 假设迭代器被初始化为列表 [1,2,3]。
 * 
 * 调用 next() 返回 1，得到列表中的第一个元素。
 * 现在调用 peek() 返回 2，下一个元素。在此之后调用 next() 仍然返回 2。
 * 最后一次调用 next() 返回 3，末尾元素。在此之后调用 hasNext() 应该返回 false。
 * 
 * 进阶：你将如何拓展你的设计？使之变得通用化，从而适应所有的类型，而不只是整数型？
 */

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
    
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
    
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
    
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(PeekingIterator("param"), "expect", "Case 1");
assert.deepEqual(PeekingIterator("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
