# https://leetcode-cn.com/problems/sum-of-two-integers/
# 0371.两整数之和
# 难度：容易
# 
# 不使用运算符 + 和 - ​​​​​​​，计算两整数 ​​​​​​​a 、b ​​​​​​​之和。
# 
# 示例 1：
# 输入: a = 1, b = 2
# 输出: 3
# 
# 示例 2：
# 输入: a = -2, b = 3
# 输出: 1

class Solution:
    def getSum(self, a: int, b: int) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.getSum('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
