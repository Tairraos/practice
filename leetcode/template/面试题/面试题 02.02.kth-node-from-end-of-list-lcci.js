/**
 * https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/
 * 面试题 02.02.返回倒数第 k 个节点
 * 难度：容易
 * 
 * 实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。
 * 
 * 注意：本题相对原题稍作改动
 * 
 * 示例：
 * 输入： 1->2->3->4->5 和 k = 2
 * 输出： 4
 * 
 * 说明：
 * 
 * 给定的 k 保证是有效的。
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
 * @return {number}
 */
var kthToLast = function(head, k) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

// Tool: Linked list to Array & Array to Linked list
let toArray = a => a ? a.next ? [a.val].concat(toArray(a.next)) : [a.val] : [],
    toLinked = a => a.length ? ({val: +a[0], next: a.slice(1).length ? toLinked(a.slice(1)) : null}) : null;

assert.deepEqual(toArray(kthToLast(toLinked([1,2,3]))), [1,2,3], "Case 1");
assert.deepEqual(toArray(kthToLast(toLinked([1,2,3]))), [1,2,3], "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
