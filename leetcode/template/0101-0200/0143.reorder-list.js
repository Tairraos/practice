/**
 * https://leetcode-cn.com/problems/reorder-list/
 * 0143.重排链表
 * 难度：中等
 * 
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 * 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 示例 1：
 * 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
 * 
 * 示例 2：
 * 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(reorderList("param"), "expect", "caseName");
assert.deepEqual(reorderList("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
