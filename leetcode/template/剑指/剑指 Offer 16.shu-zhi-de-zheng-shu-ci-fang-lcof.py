# https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/
# 剑指 Offer 16.数值的整数次方
# 难度：中等
# 
# 实现函数double Power(double base, int exponent)，求base的exponent次方。不得使用库函数，同时不需要考虑大数问题。
# 
# 示例 1:
# 输入: 2.00000, 10
# 输出: 1024.00000
# 
# 示例 2:
# 输入: 2.10000, 3
# 输出: 9.26100
# 
# 示例 3:
# 输入: 2.00000, -2
# 输出: 0.25000
# 解释: 2-2 = 1/22 = 1/4 = 0.25
# 
# 说明:
# 
# -100.0 < x < 100.0
# n 是 32 位有符号整数，其数值范围是 [&minus;231, 231 &minus; 1] 。
# 
# 注意：本题与主站 50 题相同：https://leetcode-cn.com/problems/powx-n/


class Solution:
    def myPow(self, x: float, n: int) -> float:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.myPow('param') == 'expect', 'Case 1'
    assert unit.myPow('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
