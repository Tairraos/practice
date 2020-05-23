# https://leetcode-cn.com/problems/remove-linked-list-elements/
# 0203.移除链表元素
# 难度：容易
# 
# 删除链表中等于给定值 val 的所有节点。
# 
# 示例：
# 输入: 1->2->6->3->4->5->6, val = 6
# 输出: 1->2->3->4->5


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x, y = None):
        self.val = x
        self.next = y

class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    def toArray(a: ListNode): return ([a.val] + toArray(a.next) if a.next else [a.val]) if a else []
    def toLinked(a): return ListNode(a[0], toLinked(a[1:]) if len(a[1:]) else None) if len(a) else None

    assert toArray(unit.removeElements(toLinked([1,2,3]))) == [1,2,3], 'Case 1'
    assert toArray(unit.removeElements(toLinked([1,2,3]))) == [1,2,3], 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
