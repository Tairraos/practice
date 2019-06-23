# https://leetcode-cn.com/problems/number-of-subarrays-with-bounded-maximum/
# 0795.区间子数组个数
# 难度：中等
# 
# 给定一个元素都是正整数的数组A ，正整数 L 以及 R (L <= R)。
# 求连续、非空且其中最大元素满足大于等于L 小于等于R的子数组个数。
# 
# 例如：
# 输入：
# A = [2, 1, 4, 3]
# L = 2
# R = 3
# 输出: 3
# 解释: 满足条件的子数组: [2], [2, 1], [3].
# 
# 注意：
#   - L, R  和 A[i] 都是整数，范围在 [0, 10^9]。
#   - 数组 A 的长度范围在[1, 50000]。

class Solution:
    def numSubarrayBoundedMax(self, A: List[int], L: int, R: int) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.numSubarrayBoundedMax('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
