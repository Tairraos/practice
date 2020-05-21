/**
 * https://leetcode-cn.com/problems/partition-list-lcci/
 * 面试题 02.04.分割链表
 * 难度：中等
 * 
 * 编写程序以 x 为基准分割链表，使得所有小于 x 的节点排在大于或等于 x 的节点之前。如果链表中包含 x，x 只需出现在小于 x 的元素之后(如下所示)。分割元素 x 只需处于&ldquo;右半部分&rdquo;即可，其不需要被置于左右两部分之间。
 * 
 * 示例:
 * 输入: head = 3->5->8->5->10->2->1, x = 5
 * 输出: 3->1->2->10->5->5->8
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(partition("param"), "expect", "Case 1");
assert.deepEqual(partition("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
