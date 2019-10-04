# https://leetcode-cn.com/problems/longest-consecutive-sequence/
# 0128.最长连续序列
# 难度：困难
# 
# 给定一个未排序的整数数组，找出最长连续序列的长度。
# 要求算法的时间复杂度为 O(n)。
# 
# 示例：
# 输入: [100, 4, 200, 1, 3, 2]
# 输出: 4
# 解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。


from typing import *


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.longestConsecutive('param') == 'expect', 'Case 1'
    assert unit.longestConsecutive('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
