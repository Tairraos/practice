# https://leetcode-cn.com/problems/range-sum-query-immutable/
# 0303.区域和检索 - 数组不可变
# 难度：容易
# 
# 给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。
# 
# 示例：
# 给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()
# 
# sumRange(0, 2) -> 1
# sumRange(2, 5) -> -1
# sumRange(0, 5) -> -3
# 
# 说明：
#   - 你可以假设数组不可变。
#   - 会多次调用 sumRange 方法。

class NumArray:

    def __init__(self, nums: List[int]):
        

    def sumRange(self, i: int, j: int) -> int:
        


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(i,j)

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')