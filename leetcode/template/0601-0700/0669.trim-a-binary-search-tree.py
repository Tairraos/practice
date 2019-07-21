# https://leetcode-cn.com/problems/trim-a-binary-search-tree/
# 0669.修剪二叉搜索树
# 难度：容易
# 
# 给定一个二叉搜索树，同时给定最小边界L 和最大边界 R。通过修剪二叉搜索树，使得所有节点的值在[L, R]中 (R>=L) 。你可能需要改变树的根节点，所以结果应当返回修剪好的二叉搜索树的新的根节点。
# 
# 示例 1：
# 输入：
#     1
#    / \
#   0   2
# 
#   L = 1
#   R = 2
# 
# 输出：
#     1
#       \
#        2
# 
# 示例 2：
# 输入：
#     3
#    / \
#   0   4
#    \
#     2
#    /
#   1
# 
#   L = 1
#   R = 3
# 
# 输出：
#       3
#      /
#    2
#   /
# 1

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def trimBST(self, root: TreeNode, L: int, R: int) -> TreeNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.trimBST('param') == 'expect', 'Case 1'
    assert unit.trimBST('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
