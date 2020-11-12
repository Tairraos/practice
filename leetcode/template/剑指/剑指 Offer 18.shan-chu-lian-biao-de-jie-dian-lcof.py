# https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
# 剑指 Offer 18.删除链表的节点
# 难度：容易
# 
# 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
# 
# 返回删除后的链表的头节点。
# 
# 注意：此题对比原题有改动
# 
# 示例 1:
# 输入: head = [4,5,1,9], val = 5
# 输出: [4,1,9]
# 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
# 
# 示例 2:
# 输入: head = [4,5,1,9], val = 1
# 输出: [4,5,9]
# 解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
# 
# 说明：
# 
# 题目保证链表中节点的值互不相同
# 若使用 C 或 C++ 语言，你不需要 free 或 delete 被删除的节点


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x, y = None):
        self.val = x
        self.next = y
class Solution:
    def deleteNode(self, head: ListNode, val: int) -> ListNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    def toArray(a: ListNode): return ([a.val] + toArray(a.next) if a.next else [a.val]) if a else []
    def toLinked(a): return ListNode(a[0], toLinked(a[1:]) if len(a[1:]) else None) if len(a) else None

    assert toArray(unit.deleteNode(toLinked([1,2,3]))) == [1,2,3], 'Case 1'
    assert toArray(unit.deleteNode(toLinked([1,2,3]))) == [1,2,3], 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
