# https://leetcode-cn.com/problems/partition-list/
# 0086.分隔链表
# 难度：中等
# 
# 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
# 你应当保留两个分区中每个节点的初始相对位置。
# 
# 示例：
# 输入: head = 1->4->3->2->5->2, x = 3
# 输出: 1->2->2->4->3->5


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x, y = None):
        self.val = x
        self.next = y

class Solution:
    def partition(self, head: ListNode, x: int) -> ListNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    def toArray(a: ListNode): return ([a.val] + toArray(a.next) if a.next else [a.val]) if a else []
    def toLinked(a): return ListNode(a[0], toLinked(a[1:]) if len(a[1:]) else None) if len(a) else None

    assert toArray(unit.partition(toLinked([1,2,3]))) == [1,2,3], 'Case 1'
    assert toArray(unit.partition(toLinked([1,2,3]))) == [1,2,3], 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
