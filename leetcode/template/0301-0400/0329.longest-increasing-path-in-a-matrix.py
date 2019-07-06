# https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/
# 0329.矩阵中的最长递增路径
# 难度：困难
# 
# 给定一个整数矩阵，找出最长递增路径的长度。
# 对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外（即不允许环绕）。
# 
# 示例 1：
# 输入: nums =
# [
#   [9,9,4],
#   [6,6,8],
#   [2,1,1]
# ]
# 输出: 4
# 解释: 最长递增路径为 [1, 2, 6, 9]。
# 
# 示例 2：
# 输入: nums =
# [
#   [3,4,5],
#   [3,2,6],
#   [2,2,1]
# ]
# 输出: 4
# 解释: 最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。

class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.longestIncreasingPath('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
