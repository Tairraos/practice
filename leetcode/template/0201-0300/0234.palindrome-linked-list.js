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
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(isPalindrome("参数"), "期望结果");
assert.deepEqual(isPalindrome("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
