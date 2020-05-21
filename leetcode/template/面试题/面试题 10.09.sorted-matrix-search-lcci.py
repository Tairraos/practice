# https://leetcode-cn.com/problems/sorted-matrix-search-lcci/
# 面试题 10.09.排序矩阵查找
# 难度：中等
# 
# 给定M&times;N矩阵，每一行、每一列都按升序排列，请编写代码找出某元素。
# 
# 示例:
# 现有矩阵 matrix 如下：
# 
# [
#   [1,   4,  7, 11, 15],
#   [2,   5,  8, 12, 19],
#   [3,   6,  9, 16, 22],
#   [10, 13, 14, 17, 24],
#   [18, 21, 23, 26, 30]
# ]
# 
# 给定 target = 5，返回 true。
# 
# 给定 target = 20，返回 false。


from typing import *


class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.searchMatrix('param') == 'expect', 'Case 1'
    assert unit.searchMatrix('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
