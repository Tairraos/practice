# https://leetcode-cn.com/problems/linked-list-cycle-lcci/
# 面试题 02.08.环路检测
# 难度：中等
# 
# 给定一个有环链表，实现一个算法返回环路的开头节点。有环链表的定义：在链表中某个节点的next元素指向在它前面出现过的节点，则表明该链表存在环路。示例 1：输入：head = [3,2,0,-4], pos = 1输出：tail connects to node index 1解释：链表中有一个环，其尾部连接到第二个节点。示例 2：输入：head = [1,2], pos = 0输出：tail connects to node index 0解释：链表中有一个环，其尾部连接到第一个节点。示例 3：输入：head = [1], pos = -1输出：no cycle解释：链表中没有环。进阶：你是否可以不用额外空间解决此题？


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x, y = None):
        self.val = x
        self.next = y

class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    def toArray(a: ListNode): return ([a.val] + toArray(a.next) if a.next else [a.val]) if a else []
    def toLinked(a): return ListNode(a[0], toLinked(a[1:]) if len(a[1:]) else None) if len(a) else None

    assert toArray(unit.detectCycle(toLinked([1,2,3]))) == [1,2,3], 'Case 1'
    assert toArray(unit.detectCycle(toLinked([1,2,3]))) == [1,2,3], 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
