# https://leetcode-cn.com/problems/bitwise-and-of-numbers-range/
# 0201.数字范围按位与
# 难度：中等
# 
# 给定范围 [m, n]，其中 0 <= m <= n <= 2147483647，返回此范围内所有数字的按位与（包含 m, n 两端点）。
# 
# 示例 1：
# 输入: [5,7]
# 输出: 4
# 
# 示例 2：
# 输入: [0,1]
# 输出: 0

class Solution:
    def rangeBitwiseAnd(self, m: int, n: int) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.rangeBitwiseAnd('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
