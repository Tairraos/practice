/**
 * https://leetcode-cn.com/problems/list-of-depth-lcci/
 * 面试题 04.03.特定深度节点链表
 * 难度：中等
 * 
 * 给定一棵二叉树，设计一个算法，创建含有某一深度上所有节点的链表（比如，若一棵树的深度为 D，则会创建出 D 个链表）。返回一个包含所有深度的链表的数组。
 * 
 * 示例：
 * 输入：[1,2,3,4,5,null,7,8]
 * 
 *         1
 *        /  \ 
 *       2    3
 *      / \    \ 
 *     4   5    7
 *    /
 *   8
 * 
 * 输出：[[1],[2,3],[4,5,7],[8]]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
     this.val = val;
     this.next = null;
 }

/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function(tree) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

// Tool: Linked list to Array & Array to Linked list
let toArray = a => a ? a.next ? [a.val].concat(toArray(a.next)) : [a.val] : [],
    toLinked = a => a.length ? ({val: +a[0], next: a.slice(1).length ? toLinked(a.slice(1)) : null}) : null;

assert.deepEqual(toArray(listOfDepth(toLinked([1,2,3]))), [1,2,3], "Case 1");
assert.deepEqual(toArray(listOfDepth(toLinked([1,2,3]))), [1,2,3], "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
