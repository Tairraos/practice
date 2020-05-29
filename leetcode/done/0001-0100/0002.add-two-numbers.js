/**
 * https://leetcode-cn.com/problems/add-two-numbers/
 * 0002.两数相加
 * 难度：中等
 * 
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */

/**
 * Definition for singly-linked list.
 */
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let start, end, pointer = new ListNode(0);
        start = end = pointer;  //占位链, 确保最后两位相加后还有进位
    while (l1.val || l1.next || l2.val || l2.next) {
        let r = pointer.val + l1.val + l2.val // 当前位置值加起来
        pointer.val = r % 10 // 个位
        pointer.next = new ListNode(r / 10 | 0) // 进位
        end = pointer // 倒数第二个链指针
        pointer = pointer.next // 指针下移
        l1 = l1.next || new ListNode(0)
        l2 = l2.next || new ListNode(0)
    }
    if (pointer.val == 0) {
        end.next = null // 如果最最一次运算没有进位，则不需要next
    }
    return start;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbersRecursion = function(l1, l2) { //递归解法
    let add = (p1, p2, ex) => {
        if (!p1 && !p2 && !ex) return null; //递归出口
        p1 = p1 || new ListNode(0);
        p2 = p2 || new ListNode(0); //链空则使用占位链进行运算
        let x = p1.val + p2.val + ex;
        ex = x / 10 | 0; //如果有进位，结果为个位数，保留进位
        x = x % 10;
        let r = new ListNode(x);
        r.next = add(p1.next, p2.next, ex);
        return r; //递归下一级链
    }
    return add(l1, l2, 0);
};

// Local test
// Tool: Linked list to Array & Array to Linked list
let assert = require("assert"),
    toArray = a => a ? a.next ? [a.val].concat(toArray(a.next)) : [a.val] : [],
    toLinked = a => a.length ? ({val: +a[0], next: a.slice(1).length ? toLinked(a.slice(1)) : null}) : null;
console.time("Time cost");

assert.deepEqual(toArray(addTwoNumbers(toLinked([2,4,3]),toLinked([5,6,4]))), [7,0,8], "Case 1");
assert.deepEqual(toArray(addTwoNumbers(toLinked([1,8]),toLinked([1]))), [2,8], "Case 2");
assert.deepEqual(toArray(addTwoNumbersRecursion(toLinked([2,4,3]),toLinked([5,6,4]))), [7,0,8], "Case 1");
assert.deepEqual(toArray(addTwoNumbersRecursion(toLinked([1,8]),toLinked([1]))), [2,8], "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
