# https://leetcode-cn.com/problems/sum-of-nodes-with-even-valued-grandparent/
# 1315.祖父节点值为偶数的节点和
# 难度：中等
# 
# 给你一棵二叉树，请你返回满足以下条件的所有节点的值之和：
# 
# 该节点的祖父节点的值为偶数。（一个节点的祖父节点是指该节点的父节点的父节点。）
# 
# 如果不存在祖父节点值为偶数的节点，那么返回 0 。
# 
# 示例：
# 输入：root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
# 输出：18
# 解释：图中红色节点的祖父节点的值为偶数，蓝色节点为这些红色节点的祖父节点。
# 
# 提示：
# 树中节点的数目在 1 到 10^4 之间。
# 每个节点的值在 1 到 100 之间。


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def sumEvenGrandparent(self, root: TreeNode) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.sumEvenGrandparent('param') == 'expect', 'Case 1'
    assert unit.sumEvenGrandparent('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
