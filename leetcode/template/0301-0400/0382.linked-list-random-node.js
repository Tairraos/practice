/**
 * https://leetcode-cn.com/problems/linked-list-random-node/
 * 0382.链表随机节点
 * 难度：中等
 * 
 * 给定一个单链表，随机选择链表的一个节点，并返回相应的节点值。保证每个节点被选的概率一样。
 * 
 * 进阶：
 * 如果链表十分大且长度未知，如何解决这个问题？你能否使用常数级空间复杂度实现？
 * 
 * 示例：
 * // 初始化一个单链表 [1,2,3].
 * ListNode head = new ListNode(1);
 * head.next = new ListNode(2);
 * head.next.next = new ListNode(3);
 * Solution solution = new Solution(head);
 * 
 * // getRandom()方法应随机返回1,2,3中的一个，保证每个元素被返回的概率相等。
 * solution.getRandom();
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
    
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(head)
 * var param_1 = obj.getRandom()
 */

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(Solution("param"), "expect", "caseName");
assert.deepEqual(Solution("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
