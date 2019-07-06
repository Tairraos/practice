# https://leetcode-cn.com/problems/flip-binary-tree-to-match-preorder-traversal/
# 0971.翻转二叉树以匹配先序遍历
# 难度：中等
# 
# 给定一个有 N 个节点的二叉树，每个节点都有一个不同于其他节点且处于 {1, ..., N} 中的值。
# 通过交换节点的左子节点和右子节点，可以翻转该二叉树中的节点。
# 考虑从根节点开始的先序遍历报告的 N 值序列。将这一 N 值序列称为树的行程。
# （回想一下，节点的先序遍历意味着我们报告当前节点的值，然后先序遍历左子节点，再先序遍历右子节点。）
# 我们的目标是翻转最少的树中节点，以便树的行程与给定的行程 voyage 相匹配。
# 如果可以，则返回翻转的所有节点的值的列表。你可以按任何顺序返回答案。
# 如果不能，则返回列表 [-1]。
# 
# 示例 1：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0971-1.png)
# 输入：root = [1,2], voyage = [2,1]
# 输出：[-1]
# 
# 示例 2：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0971-2.png)
# 输入：root = [1,2,3], voyage = [1,3,2]
# 输出：[1]
# 
# 示例 3：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0971-2.png)
# 输入：root = [1,2,3], voyage = [1,2,3]
# 输出：[]
# 
# 提示：
#   - 1 <= N <= 100

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def flipMatchVoyage(self, root: TreeNode, voyage: List[int]) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.flipMatchVoyage('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
