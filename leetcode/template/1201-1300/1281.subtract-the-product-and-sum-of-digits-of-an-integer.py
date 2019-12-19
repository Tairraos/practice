# https://leetcode-cn.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
# 1281.整数的各位积和之差
# 难度：容易
# 
# 给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。
# 
# 示例 1：
# 输入：n = 234
# 输出：15 
# 解释：
# 各位数之积 = 2 * 3 * 4 = 24 
# 各位数之和 = 2 + 3 + 4 = 9 
# 结果 = 24 - 9 = 15
# 
# 示例 2：
# 输入：n = 4421
# 输出：21
# 解释： 
# 各位数之积 = 4 * 4 * 2 * 1 = 32 
# 各位数之和 = 4 + 4 + 2 + 1 = 11 
# 结果 = 32 - 11 = 21
# 
# 提示：
# 1 <= n <= 10^5


class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.subtractProductAndSum('param') == 'expect', 'Case 1'
    assert unit.subtractProductAndSum('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
