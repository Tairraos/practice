/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * 0206.反转链表
 * 难度：容易
 * 
 * 反转一个单链表。
 * 
 * 示例：
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶：
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
console.time("leetcode");

assert.deepEqual(reverseList("param"), "expect", "caseName");
assert.deepEqual(reverseList("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
