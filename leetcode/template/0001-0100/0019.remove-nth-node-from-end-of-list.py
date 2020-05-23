# https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
# 0019.删除链表的倒数第N个节点
# 难度：中等
# 
# 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
# 
# 示例：
# 给定一个链表: 1->2->3->4->5, 和 n = 2.
# 
# 当删除了倒数第二个节点后，链表变为 1->2->3->5.
# 
# 说明：
# 给定的 n 保证是有效的。
# 
# 进阶：
# 你能尝试使用一趟扫描实现吗？


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x, y = None):
        self.val = x
        self.next = y

class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    def toArray(a: ListNode): return ([a.val] + toArray(a.next) if a.next else [a.val]) if a else []
    def toLinked(a): return ListNode(a[0], toLinked(a[1:]) if len(a[1:]) else None) if len(a) else None

    assert toArray(unit.removeNthFromEnd(toLinked([1,2,3]))) == [1,2,3], 'Case 1'
    assert toArray(unit.removeNthFromEnd(toLinked([1,2,3]))) == [1,2,3], 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
