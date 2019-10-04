# https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/
# 0559.N叉树的最大深度
# 难度：容易
# 
# 给定一个 N 叉树，找到其最大深度。
# 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
# 
# 例如，给定一个 3叉树：
# 
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0559.png)
# 
# 我们应返回其最大深度，3。
# 
# 说明：
#   - 树的深度不会超过 1000。
#   - 树的节点总不会超过 5000。


"""
# Definition for a Node.
class Node:
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution:
    def maxDepth(self, root: 'Node') -> int:
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
