/*
https://leetcode-cn.com/problems/add-two-numbers
0002.两数相加

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
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
var addTwoNumbers = function (l1, l2) {
    let empty = { val: 0, next: null },
        add = (p1, p2, ex) => {
        if (!p1 && !p2 && !ex) { return null; }
        p1 = p1 || empty;
        p2 = p2 || empty;
        x = p1.val + p2.val + ex;
        ex = 0;
        if (x > 9) {
            ex = 1;
            x = x % 10;
        }
        return { val: x, next: add(p1.next, p2.next, ex) }
    }
    return add(l1, l2, 0);
};