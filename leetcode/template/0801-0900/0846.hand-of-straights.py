# https://leetcode-cn.com/problems/hand-of-straights/
# 0846.一手顺子
# 难度：中等
# 
# 爱丽丝有一手（hand）由整数数组给定的牌。
# 现在她想把牌重新排列成组，使得每个组的大小都是 W，且由 W 张连续的牌组成。
# 如果她可以完成分组就返回 true，否则返回 false。
# 
# 示例 1：
# 输入：hand = [1,2,3,6,2,3,4,7,8], W = 3
# 输出：true
# 解释：爱丽丝的手牌可以被重新排列为 [1,2,3]，[2,3,4]，[6,7,8]。
# 
# 示例 2：
# 输入：hand = [1,2,3,4,5], W = 4
# 输出：false
# 解释：爱丽丝的手牌无法被重新排列成几个大小为 4 的组。
# 
# 提示：
#   - 1 <= hand.length <= 10000
#   - 0 <= hand[i] <= 10^9
#   - 1 <= W <= hand.length


from typing import *


class Solution:
    def isNStraightHand(self, hand: List[int], W: int) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isNStraightHand('param') == 'expect', 'Case 1'
    assert unit.isNStraightHand('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
