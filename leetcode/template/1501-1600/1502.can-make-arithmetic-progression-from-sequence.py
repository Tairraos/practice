# https://leetcode-cn.com/problems/can-make-arithmetic-progression-from-sequence/
# 1502.判断能否形成等差数列
# 难度：容易
# 
# 给你一个数字数组 arr 。
# 
# 如果一个数列中，任意相邻两项的差总等于同一个常数，那么这个数列就称为 等差数列 。
# 
# 如果可以重新排列数组形成等差数列，请返回 true ；否则，返回 false 。
# 
# 示例 1：
# 输入：arr = [3,5,1]
# 输出：true
# 解释：对数组重新排序得到 [1,3,5] 或者 [5,3,1] ，任意相邻两项的差分别为 2 或 -2 ，可以形成等差数列。
# 
# 示例 2：
# 输入：arr = [1,2,4]
# 输出：false
# 解释：无法通过重新排序得到等差数列。
# 
# 提示：
# 2 <= arr.length <= 1000
# -10^6 <= arr[i] <= 10^6


from typing import *


class Solution:
    def canMakeArithmeticProgression(self, arr: List[int]) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.canMakeArithmeticProgression('param') == 'expect', 'Case 1'
    assert unit.canMakeArithmeticProgression('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
