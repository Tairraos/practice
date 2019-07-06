# https://leetcode-cn.com/problems/powx-n/
# 0050.Pow(x, n)
# 难度：中等
# 
# 实现 [pow(x, n)](https://www.cplusplus.com/reference/valarray/pow/) ，即计算 x 的 n 次幂函数。
# 
# 示例 1：
# 输入: 2.00000, 10
# 输出: 1024.00000
# 
# 示例 2：
# 输入: 2.10000, 3
# 输出: 9.26100
# 
# 示例 3：
# 输入: 2.00000, -2
# 输出: 0.25000
# 解释: 2^-2 = 1/2^2 = 1/4 = 0.25
# 
# 说明：
#   - -100.0 < x < 100.0
#   - n 是 32 位有符号整数，其数值范围是 [-2^31, 2^31 - 1] 。

class Solution:
    def myPow(self, x: float, n: int) -> float:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.myPow('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
