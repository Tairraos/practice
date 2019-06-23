# https://leetcode-cn.com/problems/remove-linked-list-elements/
# 0203.移除链表元素
# 难度：容易
# 
# 删除链表中等于给定值 val 的所有节点。
# 
# 示例：
# 输入: 1->2->6->3->4->5->6, val = 6
# 输出: 1->2->3->4->5

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.removeElements('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
