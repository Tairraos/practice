# https://leetcode-cn.com/problems/invert-binary-tree/
# 0226.翻转二叉树
# 难度：容易
# 
# 翻转一棵二叉树。
# 
# 示例：
# 输入：
#      4
#    /   \
#   2     7
# / \   / \
# 1   3 6   9
# 输出：
#      4
#    /   \
#   7     2
# / \   / \
# 9   6 3   1
# 备注：
# 这个问题是受到 [Max Howell](https://twitter.com/mxcl)的 [原问题](https://twitter.com/mxcl/status/608682016205344768) 启发的 ：
# 
# 谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.invertTree('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
