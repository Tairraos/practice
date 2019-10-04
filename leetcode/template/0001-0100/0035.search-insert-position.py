# https://leetcode-cn.com/problems/search-insert-position/
# 0035.搜索插入位置
# 难度：容易
# 
# 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
# 你可以假设数组中无重复元素。
# 
# 示例 1：
# 输入: [1,3,5,6], 5
# 输出: 2
# 
# 示例 2：
# 输入: [1,3,5,6], 2
# 输出: 1
# 
# 示例 3：
# 输入: [1,3,5,6], 7
# 输出: 4
# 
# 示例 4：
# 输入: [1,3,5,6], 0
# 输出: 0


from typing import *


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.searchInsert('param') == 'expect', 'Case 1'
    assert unit.searchInsert('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
