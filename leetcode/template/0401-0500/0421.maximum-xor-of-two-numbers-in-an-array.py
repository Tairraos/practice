# https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array/
# 0421.数组中两个数的最大异或值
# 难度：中等
# 
# 给定一个非空数组，数组中元素为 a0, a1, a2, … , an-1，其中 0 ≤ ai < 2^31 。
# 找到 ai 和aj 最大的异或 (XOR) 运算结果，其中0 ≤ i,  j < n 。
# 你能在O(n)的时间解决这个问题吗？
# 
# 示例：
# 输入: [3, 10, 5, 25, 2, 8]
# 
# 输出: 28
# 
# 解释: 最大的结果是 5 ^ 25 = 28.


from typing import *


class Solution:
    def findMaximumXOR(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findMaximumXOR('param') == 'expect', 'Case 1'
    assert unit.findMaximumXOR('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
