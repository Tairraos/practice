/**
 * https://leetcode-cn.com/problems/sort-of-stacks-lcci/
 * 面试题 03.05.栈排序
 * 难度：中等
 * 
 * 栈排序。 编写程序，对栈进行排序使最小元素位于栈顶。最多只能使用一个其他的临时栈存放数据，但不得将元素复制到别的数据结构（如数组）中。该栈支持如下操作：push、pop、peek 和 isEmpty。当栈为空时，peek 返回 -1。
 * 
 * 示例1:
 *  输入：
 * ["SortedStack", "push", "push", "peek", "pop", "peek"]
 * [[], [1], [2], [], [], []]
 *  输出：
 * [null,null,null,1,null,2]
 * 
 * 示例2:
 *  输入： 
 * ["SortedStack", "pop", "pop", "push", "pop", "isEmpty"]
 * [[], [], [], [1], [], []]
 *  输出：
 * [null,null,null,null,null,true]
 * 
 * 说明:
 * 
 * 栈中的元素数目在[0, 5000]范围内。
 */


var SortedStack = function() {

};

/** 
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function(val) {

};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function() {

};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function() {

};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function() {

};

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(SortedStack("param"), "expect", "Case 1");
assert.deepEqual(SortedStack("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
