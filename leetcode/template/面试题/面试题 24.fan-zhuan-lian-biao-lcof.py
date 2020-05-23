# https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
# 面试题 24.反转链表
# 难度：容易
# 
# 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
# 
# 示例:
# 输入: 1->2->3->4->5->NULL
# 输出: 5->4->3->2->1->NULL
# 
# 限制：
# 
# 0 <= 节点个数 <= 5000
# 
# 注意：本题与主站 206 题相同：https://leetcode-cn.com/problems/reverse-linked-list/


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x, y = None):
        self.val = x
        self.next = y

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    def toArray(a: ListNode): return ([a.val] + toArray(a.next) if a.next else [a.val]) if a else []
    def toLinked(a): return ListNode(a[0], toLinked(a[1:]) if len(a[1:]) else None) if len(a) else None

    assert toArray(unit.reverseList(toLinked([1,2,3]))) == [1,2,3], 'Case 1'
    assert toArray(unit.reverseList(toLinked([1,2,3]))) == [1,2,3], 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
