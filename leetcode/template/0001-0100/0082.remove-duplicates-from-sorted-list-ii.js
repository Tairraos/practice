/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
 * 0082.删除排序链表中的重复元素 II
 * 难度：中等
 * 
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
 * 
 * 示例 1：
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 * 
 * 示例 2：
 * 输入: 1->1->1->2->3
 * 输出: 2->3
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

// Tool: Linked list to Array & Array to Linked list
let toArray = a => a ? a.next ? [a.val].concat(toArray(a.next)) : [a.val] : [],
    toLinked = a => a.length ? ({val: +a[0], next: a.slice(1).length ? toLinked(a.slice(1)) : null}) : null;

assert.deepEqual(toArray(deleteDuplicates(toLinked([1,2,3]))), [1,2,3], "Case 1");
assert.deepEqual(toArray(deleteDuplicates(toLinked([1,2,3]))), [1,2,3], "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
