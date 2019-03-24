/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * 0021.合并两个有序链表
 * 难度：容易
 * 
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 
 * 示例：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(mergeTwoLists("参数"), "期望结果");
assert.deepEqual(mergeTwoLists("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
