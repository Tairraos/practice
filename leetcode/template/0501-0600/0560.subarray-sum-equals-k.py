# https://leetcode-cn.com/problems/subarray-sum-equals-k/
# 0560.和为K的子数组
# 难度：中等
# 
# 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
# 
# 示例 1：
# 输入:nums = [1,1,1], k = 2
# 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
# 
# 说明：
#   - 数组的长度为 [1, 20,000]。
#   - 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。


from typing import *


class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.subarraySum('param') == 'expect', 'Case 1'
    assert unit.subarraySum('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
