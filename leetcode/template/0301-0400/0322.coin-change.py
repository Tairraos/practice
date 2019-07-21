# https://leetcode-cn.com/problems/coin-change/
# 0322.零钱兑换
# 难度：中等
# 
# 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
# 
# 示例 1：
# 输入: coins = [1, 2, 5], amount = 11
# 输出: 3
# 解释: 11 = 5 + 5 + 1
# 
# 示例 2：
# 输入: coins = [2], amount = 3
# 输出: -1
# 
# 说明：
# 你可以认为每种硬币的数量是无限的。

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.coinChange('param') == 'expect', 'Case 1'
    assert unit.coinChange('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
