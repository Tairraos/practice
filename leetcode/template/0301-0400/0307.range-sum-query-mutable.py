# https://leetcode-cn.com/problems/range-sum-query-mutable/
# 0307.区域和检索 - 数组可修改
# 难度：中等
# 
# 给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。
# update(i, val) 函数可以通过将下标为 i 的数值更新为 val，从而对数列进行修改。
# 
# 示例：
# Given nums = [1, 3, 5]
# 
# sumRange(0, 2) -> 9
# update(1, 2)
# sumRange(0, 2) -> 8
# 
# 说明：
#   - 数组仅可以在 update 函数下进行修改。
#   - 你可以假设 update 函数与 sumRange 函数的调用次数是均匀分布的。


from typing import *


class NumArray:

    def __init__(self, nums: List[int]):
        

    def update(self, i: int, val: int) -> None:
        

    def sumRange(self, i: int, j: int) -> int:
        


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# obj.update(i,val)
# param_2 = obj.sumRange(i,j)
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', 'Case 1'
    assert unit.__init__('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
