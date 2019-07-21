# https://leetcode-cn.com/problems/count-of-range-sum/
# 0327.区间和的个数
# 难度：困难
# 
# 给定一个整数数组 nums，返回区间和在 [lower, upper] 之间的个数，包含 lower 和 upper。
# 区间和 S(i, j) 表示在 nums 中，位置从 i 到 j 的元素之和，包含 i 和 j (i ≤ j)。
# 
# 说明：
# 最直观的算法复杂度是 O(n^2) ，请在此基础上优化你的算法。
# 
# 示例：
# 输入: nums = [-2,5,-1], lower = -2, upper = 2,
# 输出: 3
# 解释: 3个区间分别是: [0,0], [2,2], [0,2]，它们表示的和分别为: -2, -1, 2。

class Solution:
    def countRangeSum(self, nums: List[int], lower: int, upper: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.countRangeSum('param') == 'expect', 'Case 1'
    assert unit.countRangeSum('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
