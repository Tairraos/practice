# https://leetcode-cn.com/problems/permutations/
# 0046.全排列
# 难度：中等
# 
# 给定一个没有重复数字的序列，返回其所有可能的全排列。
# 
# 示例：
# 输入: [1,2,3]
# 输出：
# [
#   [1,2,3],
#   [1,3,2],
#   [2,1,3],
#   [2,3,1],
#   [3,1,2],
#   [3,2,1]
# ]


from typing import *


class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.permute('param') == 'expect', 'Case 1'
    assert unit.permute('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
