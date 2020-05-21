# https://leetcode-cn.com/problems/circus-tower-lcci/
# 面试题 17.08.马戏团人塔
# 难度：中等
# 
# 有个马戏团正在设计叠罗汉的表演节目，一个人要站在另一人的肩膀上。出于实际和美观的考虑，在上面的人要比下面的人矮一点且轻一点。已知马戏团每个人的身高和体重，请编写代码计算叠罗汉最多能叠几个人。
# 
# 示例：
# 输入：height = [65,70,56,75,60,68] weight = [100,150,90,190,95,110]
# 输出：6
# 解释：从上往下数，叠罗汉最多能叠 6 层：(56,90), (60,95), (65,100), (68,110), (70,150), (75,190)
# 
# 提示：
# height.length == weight.length <= 10000


from typing import *


class Solution:
    def bestSeqAtIndex(self, height: List[int], weight: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.bestSeqAtIndex('param') == 'expect', 'Case 1'
    assert unit.bestSeqAtIndex('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
