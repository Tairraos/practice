/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * 0206.反转链表
 * 难度：容易
 * 
 * 反转一个单链表。
 * 
 * 示例：
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶：
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
var reverseList = function (head) {
    // //不迭代
    // let result, stack = [head, null];
    // while (head = head.next) stack.unshift(head); //每个结点都压栈，撸到底
    // result = stack[0];
    // while (head = stack.shift()) head.next = stack[0]; //从栈里的顺序重置每个next
    // return result;
    //迭代
    let point = head, tmp = null;
    while (head != null) {
        point.next = tmp; //指向前一个节点，一开始是个null
        tmp = point; //tmp保留当前节点
        head = head.next; //
        point = head  //
    }
    return tmp;
};

// Local test
let assert = require("assert"),
    toArr = a => a ? a.next ? [a.val].concat(toArr(a.next)) : [a.val] : [],
    toTab = a => a.length ? ({
        val: +a[0],
        next: a.slice(1).length ? toTab(a.slice(1)) : null
    }) : null,
    testTable;
console.time("Time cost");

testTable = toTab([1, 2, 3, 4, 5]);
assert.deepEqual(toArr(reverseList(testTable)), [5, 4, 3, 2, 1], "case 1");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");