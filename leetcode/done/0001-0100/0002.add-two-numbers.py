# https://leetcode-cn.com/problems/add-two-numbers/
# 0002.两数相加
# 难度：中等
#
# 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
# 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
# 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
#
# 示例：
# 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
# 输出：7 -> 0 -> 8
# 原因：342 + 465 = 807


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x, y=None):
        self.val = x
        self.next = y


class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:  # 遍历解
        start = end = pointer = ListNode(0)
        while (l1.val or l1.next or l2.val or l2.next):  # 如果还有未加完的链
            r = pointer.val + l1.val + l2.val  # 当前位置值加起来
            pointer.val = r % 10  # 个位
            pointer.next = ListNode(r // 10)  # 进位
            end = pointer  # 保留当前指针
            pointer = pointer.next  # 指针下移
            l1 = l1.next if (l1.next) else ListNode(0)
            l2 = l2.next if (l2.next) else ListNode(0)
        if(pointer.val == 0):
            end.next = None  # 如果最最一次运算没有进位，则不需要next
        return start


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    def toArray(a: ListNode): return ([a.val] + toArray(a.next) if a.next else [a.val]) if a else []
    def toLinked(a): return ListNode(a[0], toLinked(a[1:]) if len(a[1:]) else None) if len(a) else None

    assert toArray(unit.addTwoNumbers(toLinked([2, 4, 3]), toLinked([5, 6, 4]))) == [7, 0, 8], 'Case 1'
    assert toArray(unit.addTwoNumbers(toLinked([1, 8]), toLinked([0]))) == [1, 8], 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
