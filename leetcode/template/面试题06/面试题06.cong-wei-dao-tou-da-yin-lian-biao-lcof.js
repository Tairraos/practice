/**
 * https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 * 面试题06.从尾到头打印链表
 * 难度：容易
 * 
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * 
 * 示例 1：
 * 输入：head = [1,3,2]
 * 输出：[2,3,1]
 * 
 * 限制：
 * 
 * 0 <= 链表长度 <= 10000
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
 * @return {number[]}
 */
var reversePrint = function(head) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(reversePrint("param"), "expect", "Case 1");
assert.deepEqual(reversePrint("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
