/**
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/
 * 0023.合并K个排序链表
 * 难度：困难
 * 
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 * 
 * 示例：
 * 输入：
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(mergeKLists("param"), "expect", "caseName");
assert.deepEqual(mergeKLists("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
