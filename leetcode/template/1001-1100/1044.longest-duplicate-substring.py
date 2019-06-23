# https://leetcode-cn.com/problems/longest-duplicate-substring/
# 1044.最长重复子串
# 难度：困难
# 
# 给出一个字符串 S，考虑其所有重复子串（S 的连续子串，出现两次或多次，可能会有重叠）。
# 
# 返回任何具有最长可能长度的重复子串。（如果 S 不含重复子串，那么答案为 ""。）
# 
# 示例 1：
# 输入："banana"
# 输出："ana"
# 
# 示例 2：
# 输入："abcd"
# 输出：""
# 
# 提示：
# 2 <= S.length <= 10^5
# S 由小写英文字母组成。

class Solution:
    def longestDupSubstring(self, S: str) -> str:

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.longestDupSubstring('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
