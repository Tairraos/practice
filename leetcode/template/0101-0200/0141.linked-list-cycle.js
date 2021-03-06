/**
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * 0141.环形链表
 * 难度：容易
 * 
 * 给定一个链表，判断链表中是否有环。
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 * 
 * 示例 1：
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0141-1.png)
 * 
 * 示例 2：
 * 输入：head = [1,2], pos = 0
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0141-2.png)
 * 
 * 示例 3：
 * 输入：head = [1], pos = -1
 * 输出：false
 * 解释：链表中没有环。
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0141-3.png)
 * 
 * 进阶：
 * 你能用 O(1)（即，常量）内存解决此问题吗？
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
var hasCycle = function(head) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

// Tool: Linked list to Array & Array to Linked list
let toArray = a => a ? a.next ? [a.val].concat(toArray(a.next)) : [a.val] : [],
    toLinked = a => a.length ? ({val: +a[0], next: a.slice(1).length ? toLinked(a.slice(1)) : null}) : null;

assert.deepEqual(toArray(hasCycle(toLinked([1,2,3]))), [1,2,3], "Case 1");
assert.deepEqual(toArray(hasCycle(toLinked([1,2,3]))), [1,2,3], "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
