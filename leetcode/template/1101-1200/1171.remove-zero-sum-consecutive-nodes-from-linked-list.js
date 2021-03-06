/**
 * https://leetcode-cn.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/
 * 1171.从链表中删去总和值为零的连续节点
 * 难度：中等
 * 
 * 给你一个链表的头节点 head，请你编写代码，反复删去链表中由 总和 值为 0 的连续节点组成的序列，直到不存在这样的序列为止。
 * 
 * 删除完毕后，请你返回最终结果链表的头节点。
 * 
 * 你可以返回任何满足题目要求的答案。
 * 
 * （注意，下面示例中的所有序列，都是对 ListNode 对象序列化的表示。）
 * 
 * 示例 1：
 * 输入：head = [1,2,-3,3,1]
 * 输出：[3,1]
 * 提示：答案 [1,2,1] 也是正确的。
 * 示例 2：
 * 
 * 输入：head = [1,2,3,-3,4]
 * 输出：[1,2,4]
 * 
 * 示例 3：
 * 输入：head = [1,2,3,-3,-2]
 * 输出：[1]
 * 
 * 提示：
 * 给你的链表中可能有 1 到 1000 个节点。
 * 对于链表中的每个节点，节点的值：-1000 <= node.val <= 1000.
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
var removeZeroSumSublists = function(head) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

// Tool: Linked list to Array & Array to Linked list
let toArray = a => a ? a.next ? [a.val].concat(toArray(a.next)) : [a.val] : [],
    toLinked = a => a.length ? ({val: +a[0], next: a.slice(1).length ? toLinked(a.slice(1)) : null}) : null;

assert.deepEqual(toArray(removeZeroSumSublists(toLinked([1,2,3]))), [1,2,3], "Case 1");
assert.deepEqual(toArray(removeZeroSumSublists(toLinked([1,2,3]))), [1,2,3], "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
