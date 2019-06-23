# https://leetcode-cn.com/problems/clone-graph/
# 0133.克隆图
# 难度：中等
# 
# 给定无向[连通](https://baike.baidu.com/item/%E8%BF%9E%E9%80%9A%E5%9B%BE)图中一个节点的引用，返回该图的[深拷贝](https://baike.baidu.com/item/%E6%B7%B1%E6%8B%B7%E8%B4%9D)（克隆）。图中的每个节点都包含它的值 val（Int） 和其邻居的列表（list[Node]）。
# 
# 示例：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0133.png)
# 输入：
# {"$id":"1","neighbors":[{"$id":"2","neighbors":[{"$ref":"1"},{"$id":"3","neighbors":[{"$ref":"2"},{"$id":"4","neighbors":[{"$ref":"3"},{"$ref":"1"}],"val":4}],"val":3}],"val":2},{"$ref":"4"}],"val":1}
# 
# 解释：
# 节点 1 的值是 1，它有两个邻居：节点 2 和 4 。
# 节点 2 的值是 2，它有两个邻居：节点 1 和 3 。
# 节点 3 的值是 3，它有两个邻居：节点 2 和 4 。
# 节点 4 的值是 4，它有两个邻居：节点 1 和 3 。
# 
# 提示：
#   - 节点数介于 1 到 100 之间。
#   - 无向图是一个[简单图](https://baike.baidu.com/item/简单图/1680528)，这意味着图中没有重复的边，也没有自环。
#   - 由于图是无向的，如果节点 p 是节点 q 的邻居，那么节点 q 也必须是节点 p 的邻居。
#   - 必须将给定节点的拷贝作为对克隆图的引用返回。

"""
# Definition for a Node.
class Node:
    def __init__(self, val, neighbors):
        self.val = val
        self.neighbors = neighbors
"""
class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
