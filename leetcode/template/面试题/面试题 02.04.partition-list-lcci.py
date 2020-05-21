# https://leetcode-cn.com/problems/partition-list-lcci/
# 面试题 02.04.分割链表
# 难度：中等
# 
# 编写程序以 x 为基准分割链表，使得所有小于 x 的节点排在大于或等于 x 的节点之前。如果链表中包含 x，x 只需出现在小于 x 的元素之后(如下所示)。分割元素 x 只需处于&ldquo;右半部分&rdquo;即可，其不需要被置于左右两部分之间。
# 
# 示例:
# 输入: head = 3->5->8->5->10->2->1, x = 5
# 输出: 3->1->2->10->5->5->8


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def partition(self, head: ListNode, x: int) -> ListNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.partition('param') == 'expect', 'Case 1'
    assert unit.partition('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
