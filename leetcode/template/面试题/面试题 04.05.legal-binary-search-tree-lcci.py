# https://leetcode-cn.com/problems/legal-binary-search-tree-lcci/
# 面试题 04.05.合法二叉搜索树
# 难度：中等
# 
# 实现一个函数，检查一棵二叉树是否为二叉搜索树。示例 1:输入:    2   / &#92  1   3输出: true示例 2:输入:    5   / &#92  1   4     / &#92    3   6输出: false解释: 输入为: [5,1,4,null,null,3,6]。     根节点的值为 5 ，但是其右子节点值为 4 。


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isValidBST('param') == 'expect', 'Case 1'
    assert unit.isValidBST('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
