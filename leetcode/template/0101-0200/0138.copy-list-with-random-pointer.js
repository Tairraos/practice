/**
 * https://leetcode-cn.com/problems/copy-list-with-random-pointer/
 * 0138.复制带随机指针的链表
 * 难度：中等
 * 
 * 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。
 * 要求返回这个链表的[深拷贝](https://baike.baidu.com/item/%E6%B7%B1%E6%8B%B7%E8%B4%9D)。
 * 
 * 示例：
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0138.png)
 * 输入：
 * {"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}
 * 
 * 解释：
 * 节点 1 的值是 1，它的下一个指针和随机指针都指向节点 2 。
 * 节点 2 的值是 2，它的下一个指针指向 null，随机指针指向它自己。
 * 
 * 提示：
 *   - 你必须返回给定头的拷贝作为对克隆列表的引用。
 */

/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(copyRandomList("param"), "expect", "Case 1");
assert.deepEqual(copyRandomList("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
