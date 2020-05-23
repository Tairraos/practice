# https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
# 0025.k个一组翻转链表
# 难度：困难
# 
# 给出一个链表，每 k 个节点一组进行翻转，并返回翻转后的链表。
# k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么将最后剩余节点保持原有顺序。
# 
# 示例：
# 给定这个链表：1->2->3->4->5
# 当 k = 2 时，应当返回: 2->1->4->3->5
# 当 k = 3 时，应当返回: 3->2->1->4->5
# 
# 说明：
#   - 你的算法只能使用常数的额外空间。
#   - 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x, y = None):
        self.val = x
        self.next = y

class Solution:
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    def toArray(a: ListNode): return ([a.val] + toArray(a.next) if a.next else [a.val]) if a else []
    def toLinked(a): return ListNode(a[0], toLinked(a[1:]) if len(a[1:]) else None) if len(a) else None

    assert toArray(unit.reverseKGroup(toLinked([1,2,3]))) == [1,2,3], 'Case 1'
    assert toArray(unit.reverseKGroup(toLinked([1,2,3]))) == [1,2,3], 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
