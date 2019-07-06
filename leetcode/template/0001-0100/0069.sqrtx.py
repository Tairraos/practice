# https://leetcode-cn.com/problems/sqrtx/
# 0069.x 的平方根
# 难度：容易
# 
# 实现 int sqrt(int x) 函数。
# 计算并返回 x 的平方根，其中 x 是非负整数。
# 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
# 
# 示例 1：
# 输入: 4
# 输出: 2
# 
# 示例 2：
# 输入: 8
# 输出: 2
# 
# 说明: 8 的平方根是 2.82842...,
#      由于返回类型是整数，小数部分将被舍去。

class Solution:
    def mySqrt(self, x: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.mySqrt('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
