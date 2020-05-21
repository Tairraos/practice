# https://leetcode-cn.com/problems/pairs-with-sum-lcci/
# 面试题 16.24.数对和
# 难度：中等
# 
# 设计一个算法，找出数组中两数之和为指定值的所有整数对。一个数只能属于一个数对。
# 
# 示例 1:
# 输入: nums = [5,6,5], target = 11
# 输出: [[5,6]]
# 
# 示例 2:
# 输入: nums = [5,6,5,6], target = 11
# 输出: [[5,6],[5,6]]
# 
# 提示：
# nums.length <= 100000


from typing import *


class Solution:
    def pairSums(self, nums: List[int], target: int) -> List[List[int]]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.pairSums('param') == 'expect', 'Case 1'
    assert unit.pairSums('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
