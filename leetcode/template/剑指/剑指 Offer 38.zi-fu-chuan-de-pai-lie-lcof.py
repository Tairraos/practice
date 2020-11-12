# https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/
# 剑指 Offer 38.字符串的排列
# 难度：中等
# 
# 输入一个字符串，打印出该字符串中字符的所有排列。
# 
# 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
# 
# 示例:
# 输入：s = "abc"
# 输出：["abc","acb","bac","bca","cab","cba"]
# 
# 限制：
# 
# 1 <= s 的长度 <= 8


from typing import *


class Solution:
    def permutation(self, s: str) -> List[str]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.permutation('param') == 'expect', 'Case 1'
    assert unit.permutation('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
