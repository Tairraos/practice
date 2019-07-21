/**
 * https://leetcode-cn.com/problems/remove-linked-list-elements/
 * 0203.移除链表元素
 * 难度：容易
 * 
 * 删除链表中等于给定值 val 的所有节点。
 * 
 * 示例：
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(removeElements("param"), "expect", "caseName");
assert.deepEqual(removeElements("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
