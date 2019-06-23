# https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
# 0106.从中序与后序遍历序列构造二叉树
# 难度：中等
# 
# 根据一棵树的中序遍历与后序遍历构造二叉树。
# 
# 注意：
# 你可以假设树中没有重复的元素。
# 
# 例如，给出
# 中序遍历 inorder = [9,3,15,20,7]
# 后序遍历 postorder = [9,15,7,20,3]
# 返回如下的二叉树：
#     3
#    / \
#   9  20
#     /  \
#    15   7

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> TreeNode:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.buildTree('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
