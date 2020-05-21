# https://leetcode-cn.com/problems/delete-middle-node-lcci/
# 面试题 02.03.删除中间节点
# 难度：容易
# 
# 实现一种算法，删除单向链表中间的某个节点（即不是第一个或最后一个节点），假定你只能访问该节点。
# 
# 示例：
# 输入：单向链表a->b->c->d->e->f中的节点c
# 结果：不返回任何数据，但该链表变为a->b->d->e->f


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

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

    assert unit.deleteNode('param') == 'expect', 'Case 1'
    assert unit.deleteNode('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
