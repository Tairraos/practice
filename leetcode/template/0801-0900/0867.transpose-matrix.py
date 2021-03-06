# https://leetcode-cn.com/problems/transpose-matrix/
# 0867.转置矩阵
# 难度：容易
# 
# 给定一个矩阵 A， 返回 A 的转置矩阵。
# 矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
# 
# 示例 1：
# 输入：[[1,2,3],[4,5,6],[7,8,9]]
# 输出：[[1,4,7],[2,5,8],[3,6,9]]
# 
# 示例 2：
# 输入：[[1,2,3],[4,5,6]]
# 输出：[[1,4],[2,5],[3,6]]
# 
# 提示：
#   - 1 <= A.length <= 1000
#   - 1 <= A[0].length <= 1000


from typing import *


class Solution:
    def transpose(self, A: List[List[int]]) -> List[List[int]]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.transpose('param') == 'expect', 'Case 1'
    assert unit.transpose('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
