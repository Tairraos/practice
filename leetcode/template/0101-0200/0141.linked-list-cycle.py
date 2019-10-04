# https://leetcode-cn.com/problems/linked-list-cycle/
# 0141.环形链表
# 难度：容易
# 
# 给定一个链表，判断链表中是否有环。
# 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
# 
# 示例 1：
# 输入：head = [3,2,0,-4], pos = 1
# 输出：true
# 解释：链表中有一个环，其尾部连接到第二个节点。
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0141-1.png)
# 
# 示例 2：
# 输入：head = [1,2], pos = 0
# 输出：true
# 解释：链表中有一个环，其尾部连接到第一个节点。
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0141-2.png)
# 
# 示例 3：
# 输入：head = [1], pos = -1
# 输出：false
# 解释：链表中没有环。
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0141-3.png)
# 
# 进阶：
# 你能用 O(1)（即，常量）内存解决此问题吗？


from typing import *


#Python 2

# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.hasCycle('param') == 'expect', 'Case 1'
    assert unit.hasCycle('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
