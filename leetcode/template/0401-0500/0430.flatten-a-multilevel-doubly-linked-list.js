/**
 * https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list/
 * 0430.扁平化多级双向链表
 * 难度：中等
 * 
 * 您将获得一个双向链表，除了下一个和前一个指针之外，它还有一个子指针，可能指向单独的双向链表。这些子列表可能有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。
 * 扁平化列表，使所有结点出现在单级双链表中。您将获得列表第一级的头部。
 * 
 * 示例：
 * 输入：
 * 1---2---3---4---5---6--NULL
 *          |
 *          7---8---9---10--NULL
 *              |
 *              11--12--NULL
 * 
 * 输出：
 * 1-2-3-7-8-11-12-9-10-4-5-6-NULL
 * 
 * 以上示例的说明：
 * 给出以下多级双向链表：
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0430-1.png)
 * 
 * 我们应该返回如下所示的扁平双向链表：
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0430-2.png)
 */

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(flatten("param"), "expect", "caseName");
assert.deepEqual(flatten("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
