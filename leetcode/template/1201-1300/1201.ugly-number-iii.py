# https://leetcode-cn.com/problems/ugly-number-iii/
# 1201.丑数 III
# 难度：中等
# 
# 请你帮忙设计一个程序，用来找出第 n 个丑数。
# 
# 丑数是可以被 a 或 b 或 c 整除的 正整数。
# 
# 示例 1：
# 输入：n = 3, a = 2, b = 3, c = 5
# 输出：4
# 解释：丑数序列为 2, 3, 4, 5, 6, 8, 9, 10... 其中第 3 个是 4。
# 
# 示例 2：
# 输入：n = 4, a = 2, b = 3, c = 4
# 输出：6
# 解释：丑数序列为 2, 3, 4, 6, 8, 9, 12... 其中第 4 个是 6。
# 
# 示例 3：
# 输入：n = 5, a = 2, b = 11, c = 13
# 输出：10
# 解释：丑数序列为 2, 4, 6, 8, 10, 11, 12, 13... 其中第 5 个是 10。
# 
# 示例 4：
# 输入：n = 1000000000, a = 2, b = 217983653, c = 336916467
# 输出：1999999984
# 
# 提示：
# 1 <= n, a, b, c <= 10^9
# 1 <= a * b * c <= 10^18
# 本题结果在 [1, 2 * 10^9] 的范围内


class Solution:
    def nthUglyNumber(self, n: int, a: int, b: int, c: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.nthUglyNumber('param') == 'expect', 'Case 1'
    assert unit.nthUglyNumber('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
