# https://leetcode-cn.com/problems/peaks-and-valleys-lcci/
# 面试题 10.11.峰与谷
# 难度：中等
# 
# 在一个整数数组中，&ldquo;峰&rdquo;是大于或等于相邻整数的元素，相应地，&ldquo;谷&rdquo;是小于或等于相邻整数的元素。例如，在数组{5, 8, 6, 2, 3, 4, 6}中，{8, 6}是峰， {5, 2}是谷。现在给定一个整数数组，将该数组按峰与谷的交替顺序排序。
# 
# 示例:
# 输入: [5, 3, 1, 2, 3]
# 输出: [5, 1, 3, 2, 3]
# 
# 提示：
# nums.length <= 10000


from typing import *


class Solution:
    def wiggleSort(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.wiggleSort('param') == 'expect', 'Case 1'
    assert unit.wiggleSort('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
