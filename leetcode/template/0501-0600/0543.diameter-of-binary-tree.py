# https://leetcode-cn.com/problems/diameter-of-binary-tree/
# 0543.二叉树的直径
# 难度：容易
# 
# 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。
# 
# 示例：
# 给定二叉树
#           1
#          / \
#         2   3
#        / \
#       4   5
# 
# 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
# 
# 注意：两结点之间的路径长度是以它们之间边的数目表示。


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.diameterOfBinaryTree('param') == 'expect', 'Case 1'
    assert unit.diameterOfBinaryTree('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
