/**
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * 0019.删除链表的倒数第N个节点
 * 难度：中等
 * 
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 * 说明：
 * 给定的 n 保证是有效的。
 * 
 * 进阶：
 * 你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let table = [head], current = head;
    while (current.next !== null)
        table.push(current = current.next);
    if (table.length === 1) return null; //链表只有一个元素
    if (table.length === n) head = table[1]; //删除第一个元素
    else if (n === 1) table[table.length - 2].next = null; //删除最后一个元素
    else table[table.length - n - 1].next = table[table.length - n + 1]; //修改链
    return head;
};

// 执行用时 : 96 ms, 在Remove Nth Node From End of List的JavaScript提交中击败了94.69% 的用户
// 内存消耗 : 33.9 MB, 在Remove Nth Node From End of List的JavaScript提交中击败了46.34% 的用户

// Local test
let assert = require("assert");
let toArr = a => a ? a.next ? [a.val].concat(toArr(a.next)) : [a.val] : [];
let toTab = a => a.length ? ({val: +a[0], next: a.slice(1).length ? toTab(a.slice(1)) : null}) : null;
console.time("leetcode");

assert.deepEqual(toArr(removeNthFromEnd(toTab([1]), 1)), []);
assert.deepEqual(toArr(removeNthFromEnd(toTab([1, 2, 3, 4, 5]), 1)), [1, 2, 3, 4]);
assert.deepEqual(toArr(removeNthFromEnd(toTab([1, 2, 3, 4, 5]), 5)), [2, 3, 4, 5]);
assert.deepEqual(toArr(removeNthFromEnd(toTab([1, 2, 3, 4, 5]), 2)), [1, 2, 3, 5]);

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");