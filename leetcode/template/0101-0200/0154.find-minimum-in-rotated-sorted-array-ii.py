# https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/
# 0154.寻找旋转排序数组中的最小值 II
# 难度：困难
# 
# 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
# ( 例如，数组 [0,1,2,4,5,6,7]  可能变为 [4,5,6,7,0,1,2] )。
# 请找出其中最小的元素。
# 
# 注意数组中可能存在重复的元素。
# 
# 示例 1：
# 输入: [1,3,5]
# 输出: 1
# 
# 示例 2：
# 输入: [2,2,2,0,1]
# 输出: 0
# 
# 说明：
#   - 这道题是 [寻找旋转排序数组中的最小值](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/description/) 的延伸题目。
#   - 允许重复会影响算法的时间复杂度吗？会如何影响，为什么？


from typing import *


class Solution:
    def findMin(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findMin('param') == 'expect', 'Case 1'
    assert unit.findMin('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
