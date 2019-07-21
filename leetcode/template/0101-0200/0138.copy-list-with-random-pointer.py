# https://leetcode-cn.com/problems/copy-list-with-random-pointer/
# 0138.复制带随机指针的链表
# 难度：中等
# 
# 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。
# 要求返回这个链表的[深拷贝](https://baike.baidu.com/item/%E6%B7%B1%E6%8B%B7%E8%B4%9D)。
# 
# 示例：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0138.png)
# 输入：
# {"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}
# 
# 解释：
# 节点 1 的值是 1，它的下一个指针和随机指针都指向节点 2 。
# 节点 2 的值是 2，它的下一个指针指向 null，随机指针指向它自己。
# 
# 提示：
#   - 你必须返回给定头的拷贝作为对克隆列表的引用。

"""
# Definition for a Node.
class Node:
    def __init__(self, val, next, random):
        self.val = val
        self.next = next
        self.random = random
"""
class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', 'Case 1'
    assert unit.__init__('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
