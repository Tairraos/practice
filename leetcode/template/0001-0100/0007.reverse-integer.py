# https://leetcode-cn.com/problems/reverse-integer/
# 0007.整数反转
# 难度：容易
# 
# 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
# 
# 示例 1：
# 输入: 123
# 输出: 321
# 
# 示例 2：
# 输入: -123
# 输出: -321
# 
# 示例 3：
# 输入: 120
# 输出: 21
# 
# 注意：
# 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [-2^31,  2^31 - 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

class Solution:
    def reverse(self, x: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.reverse('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
