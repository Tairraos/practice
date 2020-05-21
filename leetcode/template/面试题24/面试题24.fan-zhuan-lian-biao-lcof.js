/**
 * https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
 * 面试题24.反转链表
 * 难度：容易
 * 
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 * 
 * 示例:
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 限制：
 * 
 * 0 <= 节点个数 <= 5000
 * 
 * 注意：本题与主站 206 题相同：https://leetcode-cn.com/problems/reverse-linked-list/
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
 * @return {ListNode}
 */
var reverseList = function(head) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(reverseList("param"), "expect", "Case 1");
assert.deepEqual(reverseList("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
