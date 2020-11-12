# https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
# 剑指 Offer 06.从尾到头打印链表
# 难度：容易
# 
# 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
# 
# 示例 1：
# 输入：head = [1,3,2]
# 输出：[2,3,1]
# 
# 限制：
# 
# 0 <= 链表长度 <= 10000


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x, y = None):
        self.val = x
        self.next = y

class Solution:
    def reversePrint(self, head: ListNode) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    def toArray(a: ListNode): return ([a.val] + toArray(a.next) if a.next else [a.val]) if a else []
    def toLinked(a): return ListNode(a[0], toLinked(a[1:]) if len(a[1:]) else None) if len(a) else None

    assert toArray(unit.reversePrint(toLinked([1,2,3]))) == [1,2,3], 'Case 1'
    assert toArray(unit.reversePrint(toLinked([1,2,3]))) == [1,2,3], 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
