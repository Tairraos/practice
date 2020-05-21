# https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees/
# 1305.两棵二叉搜索树中的所有元素
# 难度：中等
# 
# 给你 root1 和 root2 这两棵二叉搜索树。
# 
# 请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。.
# 
# 示例 1：
# 输入：root1 = [2,1,4], root2 = [1,0,3]
# 输出：[0,1,1,2,3,4]
# 
# 示例 2：
# 输入：root1 = [0,-10,10], root2 = [5,1,7,0,2]
# 输出：[-10,0,0,1,2,5,7,10]
# 
# 示例 3：
# 输入：root1 = [], root2 = [5,1,7,0,2]
# 输出：[0,1,2,5,7]
# 
# 示例 4：
# 输入：root1 = [0,-10,10], root2 = []
# 输出：[-10,0,10]
# 
# 示例 5：
# 输入：root1 = [1,null,8], root2 = [8,1]
# 输出：[1,1,8,8]
# 
# 提示：
# 每棵树最多有 5000 个节点。
# 每个节点的值在 [-10^5, 10^5] 之间。


from typing import *


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def getAllElements(self, root1: TreeNode, root2: TreeNode) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.getAllElements('param') == 'expect', 'Case 1'
    assert unit.getAllElements('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
