# https://leetcode-cn.com/problems/numbers-with-repeated-digits/
# 1012.至少有 1 位重复的数字
# 难度：困难
# 
# 给定正整数 N，返回小于等于 N 且具有至少 1 位重复数字的正整数。
# 
# 示例 1：
# 输入：20
# 输出：1
# 解释：具有至少 1 位重复数字的正数（<= 20）只有 11 。
# 
# 示例 2：
# 输入：100
# 输出：10
# 解释：具有至少 1 位重复数字的正数（<= 100）有 11，22，33，44，55，66，77，88，99 和 100 。
# 
# 示例 3：
# 输入：1000
# 输出：262
# 
# 提示：
# 1 <= N <= 10^9


class Solution:
    def numDupDigitsAtMostN(self, N: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.numDupDigitsAtMostN('param') == 'expect', 'Case 1'
    assert unit.numDupDigitsAtMostN('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
