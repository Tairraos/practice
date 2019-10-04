# https://leetcode-cn.com/problems/factorial-trailing-zeroes/
# 0172.阶乘后的零
# 难度：容易
# 
# 给定一个整数 n，返回 n! 结果尾数中零的数量。
# 
# 示例 1：
# 输入: 3
# 输出: 0
# 解释: 3! = 6, 尾数中没有零。
# 
# 示例 2：
# 输入: 5
# 输出: 1
# 解释: 5! = 120, 尾数中有 1 个零.
# 
# 说明: 你算法的时间复杂度应为 O(log n) 。


class Solution:
    def trailingZeroes(self, n: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.trailingZeroes('param') == 'expect', 'Case 1'
    assert unit.trailingZeroes('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
