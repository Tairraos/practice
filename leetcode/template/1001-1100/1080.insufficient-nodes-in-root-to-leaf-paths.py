# https://leetcode-cn.com/problems/insufficient-nodes-in-root-to-leaf-paths/
# 1080.根到叶路径上的不足节点
# 难度：中等
# 
# 给定一棵二叉树的根 root，请你考虑它所有 从根到叶的路径：从根到任何叶的路径。（所谓一个叶子节点，就是一个没有子节点的节点）
# 
# 假如通过节点 node 的每种可能的 &ldquo;根-叶&rdquo; 路径上值的总和全都小于给定的 limit，则该节点被称之为「不足节点」，需要被删除。
# 
# 请你删除所有不足节点，并返回生成的二叉树的根。
# 
# 示例 1：
# 输入：root = [1,2,3,4,-99,-99,7,8,9,-99,-99,12,13,-99,14], limit = 1
# 
# 输出：[1,2,3,4,null,null,7,8,9,null,14]
# 
# 示例 2：
# 输入：root = [5,4,8,11,null,17,4,7,1,null,null,5,3], limit = 22
# 
# 输出：[5,4,8,11,null,17,4,7,null,null,null,5]
# 
# 示例 3：
# 输入：root = [5,-6,-6], limit = 0
# 输出：[]
# 
# 提示：
# 给定的树有 1 到 5000 个节点
# -10^5 <= node.val <= 10^5
# -10^9 <= limit <= 10^9

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def sufficientSubset(self, root: TreeNode, limit: int) -> TreeNode:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.sufficientSubset('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
