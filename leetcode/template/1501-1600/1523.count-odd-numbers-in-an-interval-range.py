# https://leetcode-cn.com/problems/count-odd-numbers-in-an-interval-range/
# 1523.在区间范围内统计奇数数目
# 难度：容易
# 
# 给你两个非负整数 low 和 high 。请你返回 low 和 high 之间（包括二者）奇数的数目。
# 
# 示例 1：
# 输入：low = 3, high = 7
# 输出：3
# 解释：3 到 7 之间奇数数字为 [3,5,7] 。
# 
# 示例 2：
# 输入：low = 8, high = 10
# 输出：1
# 解释：8 到 10 之间奇数数字为 [9] 。
# 
# 提示：
# 0 <= low <= high <= 10^9


class Solution:
    def countOdds(self, low: int, high: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.countOdds('param') == 'expect', 'Case 1'
    assert unit.countOdds('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
