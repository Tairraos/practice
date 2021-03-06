/**
 * https://leetcode-cn.com/problems/partition-list/
 * 0086.分隔链表
 * 难度：中等
 * 
 * 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
 * 你应当保留两个分区中每个节点的初始相对位置。
 * 
 * 示例：
 * 输入: head = 1->4->3->2->5->2, x = 3
 * 输出: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

// Tool: Linked list to Array & Array to Linked list
let toArray = a => a ? a.next ? [a.val].concat(toArray(a.next)) : [a.val] : [],
    toLinked = a => a.length ? ({val: +a[0], next: a.slice(1).length ? toLinked(a.slice(1)) : null}) : null;

assert.deepEqual(toArray(partition(toLinked([1,2,3]))), [1,2,3], "Case 1");
assert.deepEqual(toArray(partition(toLinked([1,2,3]))), [1,2,3], "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
