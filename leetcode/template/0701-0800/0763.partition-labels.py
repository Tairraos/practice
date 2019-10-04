# https://leetcode-cn.com/problems/partition-labels/
# 0763.划分字母区间
# 难度：中等
# 
# 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。
# 
# 示例 1：
# 输入: S = "ababcbacadefegdehijhklij"
# 输出: [9,7,8]
# 解释：
# 划分结果为 "ababcbaca", "defegde", "hijhklij"。
# 每个字母最多出现在一个片段中。
# 像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
# 
# 注意：
#   - S的长度在[1, 500]之间。
#   - S只包含小写字母'a'到'z'。


from typing import *


class Solution:
    def partitionLabels(self, S: str) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.partitionLabels('param') == 'expect', 'Case 1'
    assert unit.partitionLabels('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
