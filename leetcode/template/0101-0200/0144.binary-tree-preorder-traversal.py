# https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
# 0144.二叉树的前序遍历
# 难度：中等
# 
# 给定一个二叉树，返回它的 前序 遍历。
# 示例：
# 输入: [1,null,2,3]
#    1
#     \
#      2
#     /
#    3
# 
# 输出: [1,2,3]
# 
# 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.preorderTraversal('param') == 'expect', 'Case 1'
    assert unit.preorderTraversal('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
