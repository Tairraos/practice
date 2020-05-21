# https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/
# 面试题 59-I.滑动窗口的最大值
# 难度：容易
# 
# 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
# 
# 示例:
# 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
# 输出: [3,3,5,5,6,7] 
# 解释: 
# 
#   滑动窗口的位置                最大值
# ---------------               -----
# [1  3  -1] -3  5  3  6  7       3
#  1 [3  -1  -3] 5  3  6  7       3
#  1  3 [-1  -3  5] 3  6  7       5
#  1  3  -1 [-3  5  3] 6  7       5
#  1  3  -1  -3 [5  3  6] 7       6
#  1  3  -1  -3  5 [3  6  7]      7
# 
# 提示：
# 你可以假设 k 总是有效的，在输入数组不为空的情况下，1 &le; k &le; 输入数组的大小。
# 
# 注意：本题与主站 239 题相同：https://leetcode-cn.com/problems/sliding-window-maximum/


from typing import *


class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maxSlidingWindow('param') == 'expect', 'Case 1'
    assert unit.maxSlidingWindow('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
