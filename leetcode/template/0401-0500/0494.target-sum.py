# https://leetcode-cn.com/problems/target-sum/
# 0494.目标和
# 难度：中等
# 
# 给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。
# 返回可以使最终数组和为目标数 S 的所有添加符号的方法数。
# 
# 示例 1：
# 输入: nums: [1, 1, 1, 1, 1], S: 3
# 输出: 5
# 解释：
# 
# -1+1+1+1+1 = 3
# +1-1+1+1+1 = 3
# +1+1-1+1+1 = 3
# +1+1+1-1+1 = 3
# +1+1+1+1-1 = 3
# 
# 一共有5种方法让最终目标和为3。
# 
# 注意：
#   - 数组的长度不会超过20，并且数组中的值全为正数。
#   - 初始的数组的和不会超过1000。
#   - 保证返回的最终结果为32位整数。


from typing import *


class Solution:
    def findTargetSumWays(self, nums: List[int], S: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findTargetSumWays('param') == 'expect', 'Case 1'
    assert unit.findTargetSumWays('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
