# https://leetcode-cn.com/problems/shortest-path-with-alternating-colors/
# 1129.颜色交替的最短路径
# 难度：中等
# 
# 在一个有向图中，节点分别标记为 0, 1, ..., n-1。这个图中的每条边不是红色就是蓝色，且存在自环或平行边。
# 
# red_edges 中的每一个 [i, j] 对表示从节点 i 到节点 j 的红色有向边。类似地，blue_edges 中的每一个 [i, j] 对表示从节点 i 到节点 j 的蓝色有向边。
# 
# 返回长度为 n 的数组 answer，其中 answer[X] 是从节点 0 到节点 X 的最短路径的长度，且路径上红色边和蓝色边交替出现。如果不存在这样的路径，那么 answer[x] = -1。
# 
# 示例 1：
# 输入：n = 3, red_edges = [[0,1],[1,2]], blue_edges = []
# 输出：[0,1,-1]
# 
# 示例 2：
# 输入：n = 3, red_edges = [[0,1]], blue_edges = [[2,1]]
# 输出：[0,1,-1]
# 
# 示例 3：
# 输入：n = 3, red_edges = [[1,0]], blue_edges = [[2,1]]
# 输出：[0,-1,-1]
# 
# 示例 4：
# 输入：n = 3, red_edges = [[0,1]], blue_edges = [[1,2]]
# 输出：[0,1,2]
# 
# 示例 5：
# 输入：n = 3, red_edges = [[0,1],[0,2]], blue_edges = [[1,0]]
# 输出：[0,1,1]
# 
# 提示：
# 1 <= n <= 100
# red_edges.length <= 400
# blue_edges.length <= 400
# red_edges[i].length == blue_edges[i].length == 2
# 0 <= red_edges[i][j], blue_edges[i][j] < n


from typing import *


class Solution:
    def shortestAlternatingPaths(self, n: int, red_edges: List[List[int]], blue_edges: List[List[int]]) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.shortestAlternatingPaths('param') == 'expect', 'Case 1'
    assert unit.shortestAlternatingPaths('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
