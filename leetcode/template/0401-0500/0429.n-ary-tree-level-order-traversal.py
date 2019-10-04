# https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
# 0429.N叉树的层序遍历
# 难度：容易
# 
# 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
# 
# 例如，给定一个 3叉树：
# 
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0429.png)
# 
# 返回其层序遍历：
# [
#      [1],
#      [3,2,4],
#      [5,6]
# ]
# 
# 说明：
#   - 树的深度不会超过 1000。
#   - 树的节点总数不会超过 5000。


from typing import *


"""
# Definition for a Node.
class Node:
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution:
    def levelOrder(self, root: 'Node') -> List[List[int]]:
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
