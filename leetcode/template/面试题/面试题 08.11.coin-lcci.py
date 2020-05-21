# https://leetcode-cn.com/problems/coin-lcci/
# 面试题 08.11.硬币
# 难度：中等
# 
# 硬币。给定数量不限的硬币，币值为25分、10分、5分和1分，编写代码计算n分有几种表示法。(结果可能会很大，你需要将结果模上1000000007)
# 
#  示例1:
# 
#  输入: n = 5
#  输出：2
#  解释: 有两种方式可以凑成总金额:
# 5=5
# 5=1+1+1+1+1
# 
#  示例2:
# 
#  输入: n = 10
#  输出：4
#  解释: 有四种方式可以凑成总金额:
# 10=10
# 10=5+5
# 10=5+1+1+1+1+1
# 10=1+1+1+1+1+1+1+1+1+1
# 
#  说明：
# 
# 注意:
# 
# 你可以假设：
# 
# 0 <= n (总金额) <= 1000000


class Solution:
    def waysToChange(self, n: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.waysToChange('param') == 'expect', 'Case 1'
    assert unit.waysToChange('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
