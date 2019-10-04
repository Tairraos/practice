# https://leetcode-cn.com/problems/reverse-linked-list/
# 0206.反转链表
# 难度：容易
# 
# 反转一个单链表。
# 
# 示例：
# 输入: 1->2->3->4->5->NULL
# 输出: 5->4->3->2->1->NULL
# 
# 进阶：
# 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？


from typing import *


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.reverseList('param') == 'expect', 'Case 1'
    assert unit.reverseList('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
