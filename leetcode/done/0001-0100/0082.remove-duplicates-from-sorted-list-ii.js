/*
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii
 * 0082.删除排序链表中的重复元素II
 * 
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
 * 
 * 示例 1:
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 * 
 * 示例 2:
 * 输入: 1->1->1->2->3
 * 输出: 2->3
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
    //链表转数组
    let toArr = a => a.next ? [a.val].concat(toArr(a.next)) : [a.val],
        //数组转链表
        toTab = a => a.length ? ({
            val: +a[0],
            next: a.slice(1).length ? toTab(a.slice(1)) : null
        }) : null;
    //在数组里查找元素，只保留从左向右找和从右向左找位置一样的元素
    return head ? toTab(toArr(head).filter((n, i, s) => s.indexOf(n) === s.lastIndexOf(n))) : head;
};