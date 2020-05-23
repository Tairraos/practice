# https://leetcode-cn.com/problems/remove-duplicate-node-lcci/
# 面试题 02.01.移除重复节点
# 难度：容易
# 
# 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
# 
#  示例1:
# 
#  输入：[1, 2, 3, 3, 2, 1]
#  输出：[1, 2, 3]
# 
#  示例2:
# 
#  输入：[1, 1, 1, 1, 2]
#  输出：[1, 2]
# 
# 提示：
# 链表长度在[0, 20000]范围内。
# 链表元素在[0, 20000]范围内。
# 
#  进阶：
# 
# 如果不得使用临时缓冲区，该怎么解决？


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x, y = None):
        self.val = x
        self.next = y

class Solution:
    def removeDuplicateNodes(self, head: ListNode) -> ListNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    def toArray(a: ListNode): return ([a.val] + toArray(a.next) if a.next else [a.val]) if a else []
    def toLinked(a): return ListNode(a[0], toLinked(a[1:]) if len(a[1:]) else None) if len(a) else None

    assert toArray(unit.removeDuplicateNodes(toLinked([1,2,3]))) == [1,2,3], 'Case 1'
    assert toArray(unit.removeDuplicateNodes(toLinked([1,2,3]))) == [1,2,3], 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
