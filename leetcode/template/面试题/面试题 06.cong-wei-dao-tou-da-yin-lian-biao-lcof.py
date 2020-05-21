# https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
# 面试题 06.从尾到头打印链表
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
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def reversePrint(self, head: ListNode) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.reversePrint('param') == 'expect', 'Case 1'
    assert unit.reversePrint('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
