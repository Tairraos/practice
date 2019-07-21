# https://leetcode-cn.com/problems/power-of-four/
# 0342.4的幂
# 难度：容易
# 
# 给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。
# 
# 示例 1：
# 输入: 16
# 输出: true
# 
# 示例 2：
# 输入: 5
# 输出: false
# 
# 进阶：
# 你能不使用循环或者递归来完成本题吗？

class Solution:
    def isPowerOfFour(self, num: int) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isPowerOfFour('param') == 'expect', 'Case 1'
    assert unit.isPowerOfFour('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
