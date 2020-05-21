# https://leetcode-cn.com/problems/qiu-12n-lcof/
# 面试题64.求1+2+…+n
# 难度：中等
# 
# 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
# 
# 示例 1：
# 输入: n = 3
# 输出: 6
# 
# 示例 2：
# 输入: n = 9
# 输出: 45
# 
# 限制：
# 
# 1 <= n <= 10000


class Solution:
    def sumNums(self, n: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.sumNums('param') == 'expect', 'Case 1'
    assert unit.sumNums('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
