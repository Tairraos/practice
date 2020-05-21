# https://leetcode-cn.com/problems/chou-shu-lcof/
# 面试题49.丑数
# 难度：中等
# 
# 我们把只包含因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。
# 
# 示例:
# 输入: n = 10
# 输出: 12
# 解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
# 
# 说明:  
# 
# 1 是丑数。
# n 不超过1690。
# 
# 注意：本题与主站 264 题相同：https://leetcode-cn.com/problems/ugly-number-ii/


class Solution:
    def nthUglyNumber(self, n: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.nthUglyNumber('param') == 'expect', 'Case 1'
    assert unit.nthUglyNumber('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
