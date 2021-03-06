# https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/
# 0674.最长连续递增序列
# 难度：容易
# 
# 给定一个未经排序的整数数组，找到最长且连续的的递增序列。
# 
# 示例 1：
# 输入: [1,3,5,4,7]
# 输出: 3
# 解释: 最长连续递增序列是 [1,3,5], 长度为3。
# 尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为5和7在原数组里被4隔开。
# 
# 示例 2：
# 输入: [2,2,2,2,2]
# 输出: 1
# 解释: 最长连续递增序列是 [2], 长度为1。
# 
# 注意：数组长度不会超过10000。


from typing import *


class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findLengthOfLCIS('param') == 'expect', 'Case 1'
    assert unit.findLengthOfLCIS('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
