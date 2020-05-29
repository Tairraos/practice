/**
 * https://leetcode-cn.com/problems/linked-list-cycle-lcci/
 * 面试题 02.08.环路检测
 * 难度：中等
 * 
 * 给定一个有环链表，实现一个算法返回环路的开头节点。有环链表的定义：在链表中某个节点的next元素指向在它前面出现过的节点，则表明该链表存在环路。示例 1：输入：head = [3,2,0,-4], pos = 1输出：tail connects to node index 1解释：链表中有一个环，其尾部连接到第二个节点。示例 2：输入：head = [1,2], pos = 0输出：tail connects to node index 0解释：链表中有一个环，其尾部连接到第一个节点。示例 3：输入：head = [1], pos = -1输出：no cycle解释：链表中没有环。进阶：你是否可以不用额外空间解决此题？
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

// Tool: Linked list to Array & Array to Linked list
let toArray = a => a ? a.next ? [a.val].concat(toArray(a.next)) : [a.val] : [],
    toLinked = a => a.length ? ({val: +a[0], next: a.slice(1).length ? toLinked(a.slice(1)) : null}) : null;

assert.deepEqual(toArray(detectCycle(toLinked([1,2,3]))), [1,2,3], "Case 1");
assert.deepEqual(toArray(detectCycle(toLinked([1,2,3]))), [1,2,3], "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
