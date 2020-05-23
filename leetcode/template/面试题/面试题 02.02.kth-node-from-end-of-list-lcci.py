# https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/
# 面试题 02.02.返回倒数第 k 个节点
# 难度：容易
# 
# 实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。
# 
# 注意：本题相对原题稍作改动
# 
# 示例：
# 输入： 1->2->3->4->5 和 k = 2
# 输出： 4
# 
# 说明：
# 
# 给定的 k 保证是有效的。


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x, y = None):
        self.val = x
        self.next = y

class Solution:
    def kthToLast(self, head: ListNode, k: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    def toArray(a: ListNode): return ([a.val] + toArray(a.next) if a.next else [a.val]) if a else []
    def toLinked(a): return ListNode(a[0], toLinked(a[1:]) if len(a[1:]) else None) if len(a) else None

    assert toArray(unit.kthToLast(toLinked([1,2,3]))) == [1,2,3], 'Case 1'
    assert toArray(unit.kthToLast(toLinked([1,2,3]))) == [1,2,3], 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
