# https://leetcode-cn.com/problems/partition-to-k-equal-sum-subsets/
# 0698.划分为k个相等的子集
# 难度：中等
# 
# 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。
# 
# 示例 1：
# 输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
# 输出： True
# 
# 说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。
# 
# 注意：
#   - 1 <= k <= len(nums) <= 16
#   - 0 < nums[i] < 10000


from typing import *


class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.canPartitionKSubsets('param') == 'expect', 'Case 1'
    assert unit.canPartitionKSubsets('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
