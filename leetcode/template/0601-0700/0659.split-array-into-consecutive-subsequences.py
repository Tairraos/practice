# https://leetcode-cn.com/problems/split-array-into-consecutive-subsequences/
# 0659.分割数组为连续子序列
# 难度：中等
# 
# 输入一个按升序排序的整数数组（可能包含重复数字），你需要将它们分割成几个子序列，其中每个子序列至少包含三个连续整数。返回你是否能做出这样的分割？
# 
# 示例 1：
# 输入: [1,2,3,3,4,5]
# 输出: True
# 解释：
# 你可以分割出这样两个连续子序列：
# 1, 2, 3
# 3, 4, 5
# 
# 示例 2：
# 输入: [1,2,3,3,4,4,5,5]
# 输出: True
# 解释：
# 你可以分割出这样两个连续子序列：
# 1, 2, 3, 4, 5
# 3, 4, 5
# 
# 示例 3：
# 输入: [1,2,3,4,4,5]
# 输出: False
# 
# 提示：
#   - 输入的数组长度范围为 [1, 10000]


from typing import *


class Solution:
    def isPossible(self, nums: List[int]) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isPossible('param') == 'expect', 'Case 1'
    assert unit.isPossible('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
