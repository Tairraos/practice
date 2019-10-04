# https://leetcode-cn.com/problems/spiral-matrix/
# 0054.螺旋矩阵
# 难度：中等
# 
# 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
# 
# 示例 1：
# 输入：
# [
# [ 1, 2, 3 ],
# [ 4, 5, 6 ],
# [ 7, 8, 9 ]
# ]
# 输出: [1,2,3,6,9,8,7,4,5]
# 
# 示例 2：
# 输入：
# [
#   [1, 2, 3, 4],
#   [5, 6, 7, 8],
#   [9,10,11,12]
# ]
# 输出: [1,2,3,4,8,12,11,10,9,5,6,7]


from typing import *


class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.spiralOrder('param') == 'expect', 'Case 1'
    assert unit.spiralOrder('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
