# https://leetcode-cn.com/problems/element-appearing-more-than-25-in-sorted-array/
# 1287.有序数组中出现次数超过25%的元素
# 难度：容易
# 
# 给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。
# 
# 请你找到并返回这个整数
# 
# 示例：
# 输入：arr = [1,2,2,6,6,6,6,7,10]
# 输出：6
# 
# 提示：
# 1 <= arr.length <= 10^4
# 0 <= arr[i] <= 10^5


from typing import *


class Solution:
    def findSpecialInteger(self, arr: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findSpecialInteger('param') == 'expect', 'Case 1'
    assert unit.findSpecialInteger('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
