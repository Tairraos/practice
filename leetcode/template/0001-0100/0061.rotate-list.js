/**
 * https://leetcode-cn.com/problems/rotate-list/
 * 0061.旋转链表
 * 难度：中等
 * 
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 * 
 * 示例 1：
 * 输入: 1->2->3->4->5->NULL, k = 2
 * 输出: 4->5->1->2->3->NULL
 * 解释：
 * 向右旋转 1 步: 5->1->2->3->4->NULL
 * 向右旋转 2 步: 4->5->1->2->3->NULL
 * 
 * 示例 2：
 * 输入: 0->1->2->NULL, k = 4
 * 输出: 2->0->1->NULL
 * 解释：
 * 向右旋转 1 步: 2->0->1->NULL
 * 向右旋转 2 步: 1->2->0->NULL
 * 向右旋转 3 步: 0->1->2->NULL
 * 向右旋转 4 步: 2->0->1->NULL
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

// Tool: Linked list to Array & Array to Linked list
let toArray = a => a ? a.next ? [a.val].concat(toArray(a.next)) : [a.val] : [],
    toLinked = a => a.length ? ({val: +a[0], next: a.slice(1).length ? toLinked(a.slice(1)) : null}) : null;

assert.deepEqual(toArray(rotateRight(toLinked([1,2,3]))), [1,2,3], "Case 1");
assert.deepEqual(toArray(rotateRight(toLinked([1,2,3]))), [1,2,3], "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
