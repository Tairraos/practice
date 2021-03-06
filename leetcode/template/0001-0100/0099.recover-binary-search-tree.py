# https://leetcode-cn.com/problems/recover-binary-search-tree/
# 0099.恢复二叉搜索树
# 难度：困难
# 
# 二叉搜索树中的两个节点被错误地交换。
# 请在不改变其结构的情况下，恢复这棵树。
# 
# 示例 1：
# 输入: [1,3,null,null,2]
# 
#    1
#   /
# 3
#   \
#    2
# 
# 输出: [3,1,null,null,2]
# 
#    3
#   /
# 1
#   \
#    2
# 
# 示例 2：
# 输入: [3,1,4,null,null,2]
# 
#   3
# / \
# 1   4
#    /
#   2
# 
# 输出: [2,1,4,null,null,3]
# 
#   2
# / \
# 1   4
#    /
#   3
# 
# 进阶：
#   - 使用 O(n) 空间复杂度的解法很容易实现。
#   - 你能想出一个只使用常数空间的解决方案吗？


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def recoverTree(self, root: TreeNode) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.recoverTree('param') == 'expect', 'Case 1'
    assert unit.recoverTree('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
