# https://leetcode-cn.com/problems/first-common-ancestor-lcci/
# 面试题 04.08.首个共同祖先
# 难度：中等
# 
# 设计并实现一个算法，找出二叉树中某两个节点的第一个共同祖先。不得将其他的节点存储在另外的数据结构中。注意：这不一定是二叉搜索树。例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]    3   / &#92  5   1 / &#92 / &#926  2 0  8  / &#92 7   4示例 1:输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1输入: 3解释: 节点 5 和节点 1 的最近公共祖先是节点 3。示例 2:输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4输出: 5解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。说明:所有节点的值都是唯一的。p、q 为不同节点且均存在于给定的二叉树中。


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.lowestCommonAncestor('param') == 'expect', 'Case 1'
    assert unit.lowestCommonAncestor('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
