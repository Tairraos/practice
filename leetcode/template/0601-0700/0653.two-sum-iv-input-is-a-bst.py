# https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/
# 0653.两数之和 IV - 输入 BST
# 难度：容易
# 
# 给定一个二叉搜索树和一个目标结果，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。
# 案例 1：
# 输入：
#     5
#    / \
#   3   6
# / \   \
# 2   4   7
# 
# Target = 9
# 
# 输出: True
# 
# 案例 2：
# 输入：
#     5
#    / \
#   3   6
# / \   \
# 2   4   7
# 
# Target = 28
# 
# 输出: False

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def findTarget(self, root: TreeNode, k: int) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findTarget('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
