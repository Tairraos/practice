# https://leetcode-cn.com/problems/lowest-common-ancestor-of-deepest-leaves/
# 1123.最深叶节点的最近公共祖先
# 难度：中等
# 
# 给你一个有根节点的二叉树，找到它最深的叶节点的最近公共祖先。
# 
# 回想一下：
# 
# 叶节点 是二叉树中没有子节点的节点
# 树的根节点的 深度 为 0，如果某一节点的深度为 d，那它的子节点的深度就是 d+1
# 如果我们假定 A 是一组节点 S 的 最近公共祖先，<font color="#c7254e" face="Menlo, Monaco, Consolas, Courier New, monospace">S</font> 中的每个节点都在以 A 为根节点的子树中，且 A 的深度达到此条件下可能的最大值。
# 
# 示例 1：
# 输入：root = [1,2,3]
# 输出：[1,2,3]
# 
# 示例 2：
# 输入：root = [1,2,3,4]
# 输出：[4]
# 
# 示例 3：
# 输入：root = [1,2,3,4,5]
# 输出：[2,4,5]
# 
# 提示：
# 给你的树中将有 1 到 1000 个节点。
# 树中每个节点的值都在 1 到 1000 之间。


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lcaDeepestLeaves(self, root: TreeNode) -> TreeNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.lcaDeepestLeaves('param') == 'expect', 'Case 1'
    assert unit.lcaDeepestLeaves('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
