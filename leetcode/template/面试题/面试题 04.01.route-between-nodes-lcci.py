# https://leetcode-cn.com/problems/route-between-nodes-lcci/
# 面试题 04.01.节点间通路
# 难度：中等
# 
# 节点间通路。给定有向图，设计一个算法，找出两个节点之间是否存在一条路径。
# 
# 示例1:
#  输入：n = 3, graph = [[0, 1], [0, 2], [1, 2], [1, 2]], start = 0, target = 2
#  输出：true
# 
# 示例2:
#  输入：n = 5, graph = [[0, 1], [0, 2], [0, 4], [0, 4], [0, 1], [1, 3], [1, 4], [1, 3], [2, 3], [3, 4]], start = 0, target = 4
#  输出 true
# 
# 提示：
# 节点数量n在[0, 1e5]范围内。
# 节点编号大于等于 0 小于 n。
# 图中可能存在自环和平行边。


from typing import *


class Solution:
    def findWhetherExistsPath(self, n: int, graph: List[List[int]], start: int, target: int) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findWhetherExistsPath('param') == 'expect', 'Case 1'
    assert unit.findWhetherExistsPath('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
