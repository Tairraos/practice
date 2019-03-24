/**
 * https://leetcode-cn.com/problems/insertion-sort-list/
 * 0147.对链表进行插入排序
 * 难度：中等
 * 
 * 对链表进行插入排序。
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0147.gif)
 * 插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
 * 每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。
 * 
 * 插入排序算法：
 *   - 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
 *   - 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
 *   - 重复直到所有输入数据插入完为止。
 * 
 * 示例 1：
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 * 
 * 示例 2：
 * 输入: -1->5->3->4->0
 * 输出: -1->0->3->4->5
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
var insertionSortList = function(head) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(insertionSortList("参数"), "期望结果");
assert.deepEqual(insertionSortList("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
