/**
 * https://leetcode-cn.com/problems/add-two-numbers/
 * 0002.两数相加
 * 难度：中等
 * 
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每
 * 个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
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
    let empty = {val: 0, next: null}, //不影响加法结果的占位链
        add = (p1, p2, ex) => {
            if (!p1 && !p2 && !ex) { return null; } //递归出口
            p1 = p1 || empty; p2 = p2 || empty; //链空则使用占位链进行运算
            x = p1.val + p2.val + ex; ex = 0; //加起来。进位归位
            if (x > 9) { x = x % 10; ex = 1; } //如果有进位，结果为个位数，保留进位
            return {val: x, next: add(p1.next, p2.next, ex)} //递归下一级链
        }
    return add(l1, l2, 0);
};



