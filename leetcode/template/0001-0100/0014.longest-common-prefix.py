# https://leetcode-cn.com/problems/longest-common-prefix/
# 0014.最长公共前缀
# 难度：容易
# 
# 编写一个函数来查找字符串数组中的最长公共前缀。
# 如果不存在公共前缀，返回空字符串 ""。
# 
# 示例 1：
# 输入: ["flower","flow","flight"]
# 输出: "fl"
# 
# 示例 2：
# 输入: ["dog","racecar","car"]
# 输出: ""
# 解释: 输入不存在公共前缀。
# 
# 说明：
# 所有输入只包含小写字母 a-z 。


from typing import *


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.longestCommonPrefix('param') == 'expect', 'Case 1'
    assert unit.longestCommonPrefix('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
