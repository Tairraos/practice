# https://leetcode-cn.com/problems/power-of-two/
# 0231.2的幂
# 难度：容易
# 
# 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
# 
# 示例 1：
# 输入: 1
# 输出: true
# 解释: 2^0 = 1
# 
# 示例 2：
# 输入: 16
# 输出: true
# 解释: 2^4 = 16
# 
# 示例 3：
# 输入: 218
# 输出: false

class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isPowerOfTwo('param') == 'expect', 'Case 1'
    assert unit.isPowerOfTwo('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
