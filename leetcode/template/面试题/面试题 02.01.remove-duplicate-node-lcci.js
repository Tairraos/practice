/**
 * https://leetcode-cn.com/problems/remove-duplicate-node-lcci/
 * 面试题 02.01.移除重复节点
 * 难度：容易
 * 
 * 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
 * 
 *  示例1:
 * 
 *  输入：[1, 2, 3, 3, 2, 1]
 *  输出：[1, 2, 3]
 * 
 *  示例2:
 * 
 *  输入：[1, 1, 1, 1, 2]
 *  输出：[1, 2]
 * 
 * 提示：
 * 链表长度在[0, 20000]范围内。
 * 链表元素在[0, 20000]范围内。
 * 
 *  进阶：
 * 
 * 如果不得使用临时缓冲区，该怎么解决？
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
var removeDuplicateNodes = function(head) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

// Tool: Linked list to Array & Array to Linked list
let toArray = a => a ? a.next ? [a.val].concat(toArray(a.next)) : [a.val] : [],
    toLinked = a => a.length ? ({val: +a[0], next: a.slice(1).length ? toLinked(a.slice(1)) : null}) : null;

assert.deepEqual(toArray(removeDuplicateNodes(toLinked([1,2,3]))), [1,2,3], "Case 1");
assert.deepEqual(toArray(removeDuplicateNodes(toLinked([1,2,3]))), [1,2,3], "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
