# https://leetcode-cn.com/problems/ugly-number/
# 0263.丑数
# 难度：容易
# 
# 编写一个程序判断给定的数是否为丑数。
# 丑数就是只包含质因数 2, 3, 5 的正整数。
# 
# 示例 1：
# 输入: 6
# 输出: true
# 解释: 6 = 2 × 3
# 
# 示例 2：
# 输入: 8
# 输出: true
# 解释: 8 = 2 × 2 × 2
# 
# 示例 3：
# 输入: 14
# 输出: false
# 解释: 14 不是丑数，因为它包含了另外一个质因数 7。
# 
# 说明：
#   - 1 是丑数。
#   - 输入不会超过 32 位有符号整数的范围: [-2^31,  2^31 - 1]。


class Solution:
    def isUgly(self, num: int) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isUgly('param') == 'expect', 'Case 1'
    assert unit.isUgly('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
