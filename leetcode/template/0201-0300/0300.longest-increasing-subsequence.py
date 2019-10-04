# https://leetcode-cn.com/problems/longest-increasing-subsequence/
# 0300.最长上升子序列
# 难度：中等
# 
# 给定一个无序的整数数组，找到其中最长上升子序列的长度。
# 
# 示例：
# 输入: [10,9,2,5,3,7,101,18]
# 输出: 4
# 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
# 
# 说明：
#   - 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
#   - 你算法的时间复杂度应该为 O(n^2) 。
# 
# 进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?


from typing import *


class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.lengthOfLIS('param') == 'expect', 'Case 1'
    assert unit.lengthOfLIS('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
