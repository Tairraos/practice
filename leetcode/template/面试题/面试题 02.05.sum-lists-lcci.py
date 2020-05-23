# https://leetcode-cn.com/problems/sum-lists-lcci/
# 面试题 02.05.链表求和
# 难度：中等
# 
# 给定两个用链表表示的整数，每个节点包含一个数位。
# 这些数位是反向存放的，也就是个位排在链表首部。
# 编写函数对这两个整数求和，并用链表形式返回结果。
# 
# 示例：
# 输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
# 输出：2 -> 1 -> 9，即912
# 
# 进阶：假设这些数位是正向存放的，请再做一遍。
# 
# 示例：
# 输入：(6 -> 1 -> 7) + (2 -> 9 -> 5)，即617 + 295
# 输出：9 -> 1 -> 2，即912


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x, y = None):
        self.val = x
        self.next = y

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    def toArray(a: ListNode): return ([a.val] + toArray(a.next) if a.next else [a.val]) if a else []
    def toLinked(a): return ListNode(a[0], toLinked(a[1:]) if len(a[1:]) else None) if len(a) else None

    assert toArray(unit.addTwoNumbers(toLinked([1,2,3]))) == [1,2,3], 'Case 1'
    assert toArray(unit.addTwoNumbers(toLinked([1,2,3]))) == [1,2,3], 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
