# https://leetcode-cn.com/problems/search-in-a-binary-search-tree/
# 0700.二叉搜索树中的搜索
# 难度：容易
# 
# 给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。
# 
# 例如，
# 给定二叉搜索树：
# 
#         4
#        / \
#       2   7
#      / \
#     1   3
# 
# 和值: 2
# 
# 你应该返回如下子树：
#       2
#      / \
#     1   3
# 
# 在上述示例中，如果要找的值是 5，但因为没有节点值为 5，我们应该返回 NULL。


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def searchBST(self, root: TreeNode, val: int) -> TreeNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.searchBST('param') == 'expect', 'Case 1'
    assert unit.searchBST('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
