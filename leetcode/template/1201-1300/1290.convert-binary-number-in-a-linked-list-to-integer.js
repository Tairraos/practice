/**
 * https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer/
 * 1290.二进制链表转整数
 * 难度：容易
 * 
 * 给你一个单链表的引用结点 head。链表中每个结点的值不是 0 就是 1。已知此链表是一个整数数字的二进制表示形式。
 * 
 * 请你返回该链表所表示数字的 十进制值 。
 * 
 * 示例 1：
 * 输入：head = [1,0,1]
 * 输出：5
 * 解释：二进制数 (101) 转化为十进制数 (5)
 * 
 * 示例 2：
 * 输入：head = [0]
 * 输出：0
 * 
 * 示例 3：
 * 输入：head = [1]
 * 输出：1
 * 
 * 示例 4：
 * 输入：head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
 * 输出：18880
 * 
 * 示例 5：
 * 输入：head = [0,0]
 * 输出：0
 * 
 * 提示：
 * 链表不为空。
 * 链表的结点总数不超过 30。
 * 每个结点的值不是 0 就是 1。
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
 * @return {number}
 */
var getDecimalValue = function(head) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

// Tool: Linked list to Array & Array to Linked list
let toArray = a => a ? a.next ? [a.val].concat(toArray(a.next)) : [a.val] : [],
    toLinked = a => a.length ? ({val: +a[0], next: a.slice(1).length ? toLinked(a.slice(1)) : null}) : null;

assert.deepEqual(toArray(getDecimalValue(toLinked([1,2,3]))), [1,2,3], "Case 1");
assert.deepEqual(toArray(getDecimalValue(toLinked([1,2,3]))), [1,2,3], "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
