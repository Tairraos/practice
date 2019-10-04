# https://leetcode-cn.com/problems/valid-mountain-array/
# 0941.有效的山脉数组
# 难度：容易
# 
# 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。
# 让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：
#   - A.length >= 3
#   - 在 0 < i < A.length - 1 条件下，存在 i 使得：
#   - A[0] < A[1] < ... A[i-1] < A[i]
#   - A[i] > A[i+1] > ... > A[B.length - 1]
# 
# 示例 1：
# 输入：[2,1]
# 输出：false
# 
# 示例 2：
# 输入：[3,5,5]
# 输出：false
# 
# 示例 3：
# 输入：[0,3,2,1]
# 输出：true
# 
# 提示：
#   - 0 <= A.length <= 10000
#   - 0 <= A[i] <= 10000


from typing import *


class Solution:
    def validMountainArray(self, A: List[int]) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.validMountainArray('param') == 'expect', 'Case 1'
    assert unit.validMountainArray('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
