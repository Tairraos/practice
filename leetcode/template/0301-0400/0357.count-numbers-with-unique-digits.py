# https://leetcode-cn.com/problems/count-numbers-with-unique-digits/
# 0357.计算各个位数不同的数字个数
# 难度：中等
# 
# 给定一个非负整数 n，计算各位数字都不同的数字 x 的个数，其中 0 ≤ x < 10^n 。
# 
# 示例：
# 输入: 2
# 输出: 91
# 解释: 答案应为除去 11,22,33,44,55,66,77,88,99 外，在 [0,100) 区间内的所有数字。

class Solution:
    def countNumbersWithUniqueDigits(self, n: int) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.countNumbersWithUniqueDigits('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
