# https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
# 剑指 Offer 32-II.从上到下打印二叉树 II
# 难度：容易
# 
# 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
# 
# 例如:
# 给定二叉树: [3,9,20,null,null,15,7],
# 
#     3
#    / \
#   9  20
#     /  \
#    15   7
# 
# 返回其层次遍历结果：
# 
# [
#   [3],
#   [9,20],
#   [15,7]
# ]
# 
# 提示：
# 节点总数 <= 1000
# 
# 注意：本题与主站 102 题相同：https://leetcode-cn.com/problems/binary-tree-level-order-traversal/


from typing import *


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.levelOrder('param') == 'expect', 'Case 1'
    assert unit.levelOrder('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
