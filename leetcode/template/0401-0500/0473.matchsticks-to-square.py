# https://leetcode-cn.com/problems/matchsticks-to-square/
# 0473.火柴拼正方形
# 难度：中等
# 
# 还记得童话《卖火柴的小女孩》吗？现在，你知道小女孩有多少根火柴，请找出一种能使用所有火柴拼成一个正方形的方法。不能折断火柴，可以把火柴连接起来，并且每根火柴都要用到。
# 输入为小女孩拥有火柴的数目，每根火柴用其长度表示。输出即为是否能用所有的火柴拼成正方形。
# 
# 示例 1：
# 输入: [1,1,2,2,2]
# 输出: true
# 
# 解释: 能拼成一个边长为2的正方形，每边两根火柴。
# 
# 示例 2：
# 输入: [3,3,3,3,4]
# 输出: false
# 
# 解释: 不能用所有火柴拼成一个正方形。
# 
# 注意：
#   - 给定的火柴长度和在 0 到 10^9之间。
#   - 火柴数组的长度不超过15。


from typing import *


class Solution:
    def makesquare(self, nums: List[int]) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.makesquare('param') == 'expect', 'Case 1'
    assert unit.makesquare('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
