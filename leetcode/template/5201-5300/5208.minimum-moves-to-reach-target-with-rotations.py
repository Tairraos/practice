# https://leetcode-cn.com/problems/minimum-moves-to-reach-target-with-rotations/
# 5208.穿过迷宫的最少移动次数
# 难度：困难
# 
# 你还记得那条风靡全球的贪吃蛇吗？
# 
# 我们在一个 n*n 的网格上构建了新的迷宫地图，蛇的长度为 2，也就是说它会占去两个单元格。蛇会从左上角（(0, 0) 和 (0, 1)）开始移动。我们用 0 表示空单元格，用 1 表示障碍物。蛇需要移动到迷宫的右下角（(n-1, n-2) 和 (n-1, n-1)）。
# 
# 每次移动，蛇可以这样走：
# 
# 如果没有障碍，则向右移动一个单元格。并仍然保持身体的水平／竖直状态。
# 如果没有障碍，则向下移动一个单元格。并仍然保持身体的水平／竖直状态。
# 如果它处于水平状态并且其下面的两个单元都是空的，就顺时针旋转 90 度。蛇从（(r, c)、(r, c+1)）移动到 （(r, c)、(r+1, c)）。
# 
# 如果它处于竖直状态并且其右面的两个单元都是空的，就逆时针旋转 90 度。蛇从（(r, c)、(r+1, c)）移动到（(r, c)、(r, c+1)）。
# 
# 返回蛇抵达目的地所需的最少移动次数。
# 
# 如果无法到达目的地，请返回 -1。
# 
# 示例 1：
# 输入：grid = [[0,0,0,0,0,1],
#                [1,1,0,0,1,0],
#                [0,0,0,0,1,1],
#                [0,0,1,0,1,0],
#                [0,1,1,0,0,0],
#                [0,1,1,0,0,0]]
# 输出：11
# 解释：
# 一种可能的解决方案是 [右, 右, 顺时针旋转, 右, 下, 下, 下, 下, 逆时针旋转, 右, 下]。
# 
# 示例 2：
# 输入：grid = [[0,0,1,1,1,1],
#                [0,0,0,0,1,1],
#                [1,1,0,0,0,1],
#                [1,1,1,0,0,1],
#                [1,1,1,0,0,1],
#                [1,1,1,0,0,0]]
# 输出：9
# 
# 提示：
# 2 <= n <= 100
# 0 <= grid[i][j] <= 1
# 蛇保证从空单元格开始出发。

class Solution:
    def minimumMoves(self, grid: List[List[int]]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.minimumMoves('param') == 'expect', 'Case 1'
    assert unit.minimumMoves('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')