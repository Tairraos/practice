# https://leetcode-cn.com/problems/range-sum-of-bst/
# 0938.二叉搜索树的范围和
# 难度：中等
# 
# 给定二叉搜索树的根结点 root，返回 L 和 R（含）之间的所有结点的值的和。
# 二叉搜索树保证具有唯一的值。
# 
# 示例 1：
# 输入：root = [10,5,15,3,7,null,18], L = 7, R = 15
# 输出：32
# 
# 示例 2：
# 输入：root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
# 输出：23
# 
# 提示：
#   - 树中的结点数量最多为 10000 个。
#   - 最终的答案保证小于 2^31。

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def rangeSumBST(self, root: TreeNode, L: int, R: int) -> int:

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.rangeSumBST('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')