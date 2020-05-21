# https://leetcode-cn.com/problems/contiguous-sequence-lcci/
# 面试题 16.17.连续数列
# 难度：容易
# 
# 给定一个整数数组（有正数有负数），找出总和最大的连续数列，并返回总和。
# 
# 示例：
# 输入： [-2,1,-3,4,-1,2,1,-5,4]
# 输出： 6
# 解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
# 
# 进阶：
# 
# 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。


from typing import *


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maxSubArray('param') == 'expect', 'Case 1'
    assert unit.maxSubArray('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
