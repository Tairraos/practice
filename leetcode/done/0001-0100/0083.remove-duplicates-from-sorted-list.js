/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 * 0083.删除排序链表中的重复元素
 * 难度：容易
 * 
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 
 * 示例 1：
 * 输入: 1->1->2
 * 输出: 1->2
 * 
 * 示例 2：
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
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
var deleteDuplicates = function (head) {
    let p = head; //指针
    while (p !== null && p.next !== null) {
        //如果重复，指针不动，next跳过一级。否则指针向下一级
        p.val === p.next.val ? p.next = p.next.next : p = p.next;
    }
    return head
};



