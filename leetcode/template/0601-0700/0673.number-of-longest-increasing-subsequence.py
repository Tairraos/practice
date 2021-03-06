# https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/
# 0673.最长递增子序列的个数
# 难度：中等
# 
# 给定一个未排序的整数数组，找到最长递增子序列的个数。
# 
# 示例 1：
# 输入: [1,3,5,4,7]
# 输出: 2
# 解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
# 
# 示例 2：
# 输入: [2,2,2,2,2]
# 输出: 5
# 解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
# 
# 注意: 给定的数组长度不超过 2000 并且结果一定是32位有符号整数。


from typing import *


class Solution:
    def findNumberOfLIS(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findNumberOfLIS('param') == 'expect', 'Case 1'
    assert unit.findNumberOfLIS('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
