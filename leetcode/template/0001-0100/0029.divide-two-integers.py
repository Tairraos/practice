# https://leetcode-cn.com/problems/divide-two-integers/
# 0029.两数相除
# 难度：中等
# 
# 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
# 返回被除数 dividend 除以除数 divisor 得到的商。
# 
# 示例 1：
# 输入: dividend = 10, divisor = 3
# 输出: 3
# 
# 示例 2：
# 输入: dividend = 7, divisor = -3
# 输出: -2
# 
# 说明：
#   - 被除数和除数均为 32 位有符号整数。
#   - 除数不为 0。
#   - 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [-2^31,  2^31 - 1]。本题中，如果除法结果溢出，则返回 2^31 - 1。

class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.divide('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
