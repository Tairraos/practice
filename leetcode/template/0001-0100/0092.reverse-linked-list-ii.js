/**
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/
 * 0092.反转链表 II
 * 难度：中等
 * 
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 
 * 说明：
 * 1 ≤ m ≤ n ≤ 链表长度。
 * 
 * 示例：
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
     this.val = val;
     this.next = null;
 }

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

// Tool: Linked list to Array & Array to Linked list
let toArray = a => a ? a.next ? [a.val].concat(toArray(a.next)) : [a.val] : [],
    toLinked = a => a.length ? ({val: +a[0], next: a.slice(1).length ? toLinked(a.slice(1)) : null}) : null;

assert.deepEqual(toArray(reverseBetween(toLinked([1,2,3]))), [1,2,3], "Case 1");
assert.deepEqual(toArray(reverseBetween(toLinked([1,2,3]))), [1,2,3], "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
