# https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
# 0589.N叉树的前序遍历
# 难度：容易
# 
# 给定一个 N 叉树，返回其节点值的前序遍历。
# 
# 例如，给定一个 3叉树：
# 
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0589.png)
# 
# 返回其前序遍历: [1,3,5,6,2,4]。
# 
# 说明: 递归法很简单，你可以使用迭代法完成此题吗?


from typing import *


"""
# Definition for a Node.
class Node:
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution:
    def preorder(self, root: 'Node') -> List[int]:
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
