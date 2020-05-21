# https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
# 面试题29.顺时针打印矩阵
# 难度：容易
# 
# 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
# 
# 示例 1：
# 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
# 输出：[1,2,3,6,9,8,7,4,5]
# 
# 示例 2：
# 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
# 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
# 
# 限制：
# 
# 0 <= matrix.length <= 100
# 0 <= matrix[i].length <= 100
# 
# 注意：本题与主站 54 题相同：https://leetcode-cn.com/problems/spiral-matrix/


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
