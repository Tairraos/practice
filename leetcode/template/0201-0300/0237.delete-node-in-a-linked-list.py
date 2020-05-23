# https://leetcode-cn.com/problems/delete-node-in-a-linked-list/
# 0237.删除链表中的节点
# 难度：容易
# 
# 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。
# 现有一个链表 -- head = [4,5,1,9]，它可以表示为：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0237.png)
# 
# 示例 1：
# 输入: head = [4,5,1,9], node = 5
# 输出: [4,1,9]
# 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
# 
# 示例 2：
# 输入: head = [4,5,1,9], node = 1
# 输出: [4,5,9]
# 解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
# 
# 说明：
#   - 链表至少包含两个节点。
#   - 链表中所有节点的值都是唯一的。
#   - 给定的节点为非末尾节点并且一定是链表中的一个有效节点。
#   - 不要从你的函数中返回任何结果。


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x, y = None):
        self.val = x
        self.next = y

class Solution:
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
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
