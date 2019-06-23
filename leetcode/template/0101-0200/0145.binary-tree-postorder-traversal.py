# https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
# 0145.二叉树的后序遍历
# 难度：困难
# 
# 给定一个二叉树，返回它的 后序 遍历。
# 
# 示例：
# 输入: [1,null,2,3]
#    1
#     \
#      2
#     /
#    3
# 
# 输出: [3,2,1]
# 
# 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def postorderTraversal(self, root: TreeNode) -> List[int]:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.postorderTraversal('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
