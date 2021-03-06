# https://leetcode-cn.com/problems/product-of-array-except-self/
# 0238.除自身以外数组的乘积
# 难度：中等
# 
# 给定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
# 
# 示例：
# 输入: [1,2,3,4]
# 输出: [24,12,8,6]
# 
# 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
# 
# 进阶：
# 你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）


from typing import *


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.productExceptSelf('param') == 'expect', 'Case 1'
    assert unit.productExceptSelf('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
