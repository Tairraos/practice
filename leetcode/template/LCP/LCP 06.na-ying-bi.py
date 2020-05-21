# https://leetcode-cn.com/problems/na-ying-bi/
# LCP 06.拿硬币
# 难度：容易
# 
# 桌上有 n 堆力扣币，每堆的数量保存在数组 coins 中。我们每次可以选择任意一堆，拿走其中的一枚或者两枚，求拿完所有力扣币的最少次数。
# 
# 示例 1：
# 输入：[4,2,1]
# 
# 输出：4
# 
# 解释：第一堆力扣币最少需要拿 2 次，第二堆最少需要拿 1 次，第三堆最少需要拿 1 次，总共 4 次即可拿完。
# 
# 示例 2：
# 输入：[2,3,10]
# 
# 输出：8
# 
# 限制：
# 
# 1 <= n <= 4
# 1 <= coins[i] <= 10


from typing import *


class Solution:
    def minCount(self, coins: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.minCount('param') == 'expect', 'Case 1'
    assert unit.minCount('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
