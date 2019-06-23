# https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
# 0105.从前序与中序遍历序列构造二叉树
# 难度：中等
# 
# 根据一棵树的前序遍历与中序遍历构造二叉树。
# 
# 注意：
# 你可以假设树中没有重复的元素。
# 
# 例如，给出
# 前序遍历 preorder = [3,9,20,15,7]
# 中序遍历 inorder = [9,3,15,20,7]
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
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.buildTree('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
