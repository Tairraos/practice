# https://leetcode-cn.com/problems/minimum-window-substring/
# 0076.最小覆盖子串
# 难度：困难
# 
# 给定一个字符串 S 和一个字符串 T，请在 S 中找出包含 T 所有字母的最小子串。
# 
# 示例：
# 输入: S = "ADOBECODEBANC", T = "ABC"
# 输出: "BANC"
# 
# 说明：
#   - 如果 S 中不存这样的子串，则返回空字符串 ""。
#   - 如果 S 中存在这样的子串，我们保证它是唯一的答案。

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.minWindow('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
