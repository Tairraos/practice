/**
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * 面试题 22.链表中倒数第k个节点
 * 难度：容易
 * 
 * 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。
 * 
 * 示例：
 * 给定一个链表: 1->2->3->4->5, 和 k = 2.
 * 
 * 返回链表 4->5.
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
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(getKthFromEnd("param"), "expect", "Case 1");
assert.deepEqual(getKthFromEnd("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
