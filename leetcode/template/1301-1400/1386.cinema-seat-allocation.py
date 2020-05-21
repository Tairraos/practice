# https://leetcode-cn.com/problems/cinema-seat-allocation/
# 1386.安排电影院座位
# 难度：中等
# 
# 如上图所示，电影院的观影厅中有 n 行座位，行编号从 1 到 n ，且每一行内总共有 10 个座位，列编号从 1 到 10 。
# 
# 给你数组 reservedSeats ，包含所有已经被预约了的座位。比如说，researvedSeats[i]=[3,8] ，它表示第 3 行第 8 个座位被预约了。
# 
# 请你返回 最多能安排多少个 4 人家庭 。4 人家庭要占据 同一行内连续 的 4 个座位。隔着过道的座位（比方说 [3,3] 和 [3,4]）不是连续的座位，但是如果你可以将 4 人家庭拆成过道两边各坐 2 人，这样子是允许的。
# 
# 示例 1：
# 输入：n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]
# 输出：4
# 解释：上图所示是最优的安排方案，总共可以安排 4 个家庭。蓝色的叉表示被预约的座位，橙色的连续座位表示一个 4 人家庭。
# 
# 示例 2：
# 输入：n = 2, reservedSeats = [[2,1],[1,8],[2,6]]
# 输出：2
# 
# 示例 3：
# 输入：n = 4, reservedSeats = [[4,3],[1,4],[4,6],[1,7]]
# 输出：4
# 
# 提示：
# 1 <= n <= 10^9
# 1 <= reservedSeats.length <= min(10*n, 10^4)
# reservedSeats[i].length == 2
# 1 <= reservedSeats[i][0] <= n
# 1 <= reservedSeats[i][1] <= 10
# 所有 reservedSeats[i] 都是互不相同的。
# 
# 


from typing import *


class Solution:
    def maxNumberOfFamilies(self, n: int, reservedSeats: List[List[int]]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maxNumberOfFamilies('param') == 'expect', 'Case 1'
    assert unit.maxNumberOfFamilies('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')