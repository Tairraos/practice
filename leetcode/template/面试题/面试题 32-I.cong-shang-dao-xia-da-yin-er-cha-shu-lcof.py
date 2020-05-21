# https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
# 面试题 32-I.从上到下打印二叉树
# 难度：中等
# 
# 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
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
# 返回：
# 
# [3,9,20,15,7]
# 
# 提示：
# 节点总数 <= 1000


from typing import *


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def levelOrder(self, root: TreeNode) -> List[int]:
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
