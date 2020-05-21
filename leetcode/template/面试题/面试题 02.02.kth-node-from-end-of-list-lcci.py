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
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def kthToLast(self, head: ListNode, k: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.kthToLast('param') == 'expect', 'Case 1'
    assert unit.kthToLast('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
