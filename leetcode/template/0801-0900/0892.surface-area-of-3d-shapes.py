# https://leetcode-cn.com/problems/surface-area-of-3d-shapes/
# 0892.三维形体的表面积
# 难度：容易
# 
# 在 N * N 的网格上，我们放置一些 1 * 1 * 1  的立方体。
# 每个值 v = grid[i][j] 表示 v 个正方体叠放在单元格 (i, j) 上。
# 返回结果形体的总表面积。
# 
# 示例 1：
# 输入：[[2]]
# 输出：10
# 
# 示例 2：
# 输入：[[1,2],[3,4]]
# 输出：34
# 
# 示例 3：
# 输入：[[1,0],[0,2]]
# 输出：16
# 
# 示例 4：
# 输入：[[1,1,1],[1,0,1],[1,1,1]]
# 输出：32
# 
# 示例 5：
# 输入：[[2,2,2],[2,1,2],[2,2,2]]
# 输出：46
# 
# 提示：
#   - 1 <= N <= 50
#   - 0 <= grid[i][j] <= 50

class Solution:
    def surfaceArea(self, grid: List[List[int]]) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.surfaceArea('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
