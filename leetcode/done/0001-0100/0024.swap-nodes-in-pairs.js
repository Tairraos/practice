/**
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * 0024.两两交换链表中的节点
 * 难度：中等
 * 
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 示例：
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
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
var swapPairs = function (head) {
    if (head === null || head.next === null) return head;
    let tmp = head.next; //tmp = 指向2的指针
    head.next = swapPairs(tmp.next); //1的next指向下一个指向交换完过的3 
    tmp.next = head; //2的下一个指向1
    return tmp;
};



// Local test
let testTable,
    assert = require("assert"),
    toTab = a => a.length ? ({
        val: +a[0],
        next: a.slice(1).length ? toTab(a.slice(1)) : null
    }) : null;

console.time("Time cost");

testTable = toTab([1, 2, 3, 4]);
assert.deepEqual(swapPairs(testTable), toTab([2, 1, 4, 3]), "case 1");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");