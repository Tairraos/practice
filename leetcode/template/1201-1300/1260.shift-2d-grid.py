# https://leetcode-cn.com/problems/shift-2d-grid/
# 1260.二维网格迁移
# 难度：容易
# 
# 给你一个 n 行 m 列的二维网格 grid 和一个整数 k。你需要将 grid 迁移 k 次。
# 
# 每次「迁移」操作将会引发下述活动：
# 
# 位于 grid[i][j] 的元素将会移动到 grid[i][j + 1]。
# 位于 grid[i][m - 1] 的元素将会移动到 grid[i + 1][0]。
# 位于 grid[n - 1][m - 1] 的元素将会移动到 grid[0][0]。
# 
# 请你返回 k 次迁移操作后最终得到的 二维网格。
# 
# 示例 1：
# 输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
# 输出：[[9,1,2],[3,4,5],[6,7,8]]
# 
# 示例 2：
# 输入：grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
# 输出：[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
# 
# 示例 3：
# 输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
# 输出：[[1,2,3],[4,5,6],[7,8,9]]
# 
# 提示：
# 1 <= grid.length <= 50
# 1 <= grid[i].length <= 50
# -1000 <= grid[i][j] <= 1000
# 0 <= k <= 100


from typing import *


class Solution:
    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.shiftGrid('param') == 'expect', 'Case 1'
    assert unit.shiftGrid('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
