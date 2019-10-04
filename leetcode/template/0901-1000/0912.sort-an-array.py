# https://leetcode-cn.com/problems/sort-an-array/
# 0912.排序数组
# 难度：中等
# 
# 给定一个整数数组 nums，将该数组升序排列。
# 
# 示例 1：
# 输入：[5,2,3,1]
# 输出：[1,2,3,5]
# 
# 示例 2：
# 输入：[5,1,1,2,0,0]
# 输出：[0,0,1,1,2,5]
# 
# 提示：
# 1 <= A.length <= 10000
# -50000 <= A[i] <= 50000


from typing import *


class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.sortArray('param') == 'expect', 'Case 1'
    assert unit.sortArray('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
