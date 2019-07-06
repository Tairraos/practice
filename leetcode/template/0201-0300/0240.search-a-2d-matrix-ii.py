# https://leetcode-cn.com/problems/search-a-2d-matrix-ii/
# 0240.搜索二维矩阵 II
# 难度：中等
# 
# 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：
#   - 每行的元素从左到右升序排列。
#   - 每列的元素从上到下升序排列。
# 
# 示例：
# 现有矩阵 matrix 如下：
# [
#   [1,   4,  7, 11, 15],
#   [2,   5,  8, 12, 19],
#   [3,   6,  9, 16, 22],
#   [10, 13, 14, 17, 24],
#   [18, 21, 23, 26, 30]
# ]
# 
# 给定 target = 5，返回 true。
# 给定 target = 20，返回 false。

class Solution:
    def searchMatrix(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.searchMatrix('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
