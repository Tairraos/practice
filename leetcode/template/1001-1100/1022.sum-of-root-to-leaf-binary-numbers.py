# https://leetcode-cn.com/problems/sum-of-root-to-leaf-binary-numbers/
# 1022.从根到叶的二进制数之和
# 难度：容易
# 
# 给出一棵二叉树，其上每个结点的值都是 0 或 1 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。例如，如果路径为 0 -> 1 -> 1 -> 0 -> 1，那么它表示二进制数 01101，也就是 13 。
# 
# 对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。
# 
# 以 10^9 + 7 为模，返回这些数字之和。
# 
# 示例：
# 输入：[1,0,1,0,1,0,1]
# 输出：22
# 解释：(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
# 
# 提示：
# 树中的结点数介于 1 和 1000 之间。
# node.val 为 0 或 1 。


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def sumRootToLeaf(self, root: TreeNode) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.sumRootToLeaf('param') == 'expect', 'Case 1'
    assert unit.sumRootToLeaf('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
