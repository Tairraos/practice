# https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/
# 剑指 Offer 57-II.和为s的连续正数序列
# 难度：容易
# 
# 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
# 
# 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
# 
# 示例 1：
# 输入：target = 9
# 输出：[[2,3,4],[4,5]]
# 
# 示例 2：
# 输入：target = 15
# 输出：[[1,2,3,4,5],[4,5,6],[7,8]]
# 
# 限制：
# 
# 1 <= target <= 10^5


from typing import *


class Solution:
    def findContinuousSequence(self, target: int) -> List[List[int]]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findContinuousSequence('param') == 'expect', 'Case 1'
    assert unit.findContinuousSequence('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
