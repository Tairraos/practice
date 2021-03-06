/**
 * https://leetcode-cn.com/problems/palindrome-linked-list/
 * 0234.回文链表
 * 难度：容易
 * 
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1：
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2：
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
     this.val = val;
     this.next = null;
 }

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

// Tool: Linked list to Array & Array to Linked list
let toArray = a => a ? a.next ? [a.val].concat(toArray(a.next)) : [a.val] : [],
    toLinked = a => a.length ? ({val: +a[0], next: a.slice(1).length ? toLinked(a.slice(1)) : null}) : null;

assert.deepEqual(toArray(isPalindrome(toLinked([1,2,3]))), [1,2,3], "Case 1");
assert.deepEqual(toArray(isPalindrome(toLinked([1,2,3]))), [1,2,3], "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
