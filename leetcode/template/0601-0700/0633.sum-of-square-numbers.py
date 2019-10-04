# https://leetcode-cn.com/problems/sum-of-square-numbers/
# 0633.平方数之和
# 难度：容易
# 
# 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c。
# 
# 示例1：
# 输入: 5
# 输出: True
# 解释: 1 * 1 + 2 * 2 = 5
# 
# 示例2：
# 输入: 3
# 输出: False


class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.judgeSquareSum('param') == 'expect', 'Case 1'
    assert unit.judgeSquareSum('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
