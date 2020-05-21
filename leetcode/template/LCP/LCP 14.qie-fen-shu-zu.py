# https://leetcode-cn.com/problems/qie-fen-shu-zu/
# LCP 14.切分数组
# 难度：困难
# 
# 给定一个整数数组 nums ，小李想将 nums 切割成若干个非空子数组，使得每个子数组最左边的数和最右边的数的最大公约数大于 1 。为了减少他的工作量，请求出最少可以切成多少个子数组。
# 
# 示例 1：
# 输入：nums = [2,3,3,2,3,3]
# 
# 输出：2
# 
# 解释：最优切割为 [2,3,3,2] 和 [3,3] 。第一个子数组头尾数字的最大公约数为 2 ，第二个子数组头尾数字的最大公约数为 3 。
# 
# 示例 2：
# 输入：nums = [2,3,5,7]
# 
# 输出：4
# 
# 解释：只有一种可行的切割：[2], [3], [5], [7]
# 
# 限制：
# 
# 1 <= nums.length <= 10^5
# 2 <= nums[i] <= 10^6


from typing import *


class Solution:
    def splitArray(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.splitArray('param') == 'expect', 'Case 1'
    assert unit.splitArray('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
