# https://leetcode-cn.com/problems/island-perimeter/
# 0463.岛屿的周长
# 难度：容易
# 
# 给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。
# 网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。
# 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。
# 
# 示例：
# 输入：
# [[0,1,0,0],
# [1,1,1,0],
# [0,1,0,0],
# [1,1,0,0]]
# 
# 输出: 16
# 
# 解释: 它的周长是下面图片中的 16 个黄色的边：
# 
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0463.png)


from typing import *


class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.islandPerimeter('param') == 'expect', 'Case 1'
    assert unit.islandPerimeter('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
