# https://leetcode-cn.com/problems/palindromic-substrings/
# 0647.回文子串
# 难度：中等
# 
# 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
# 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被计为是不同的子串。
# 
# 示例 1：
# 输入: "abc"
# 输出: 3
# 解释: 三个回文子串: "a", "b", "c".
# 
# 示例 2：
# 输入: "aaa"
# 输出: 6
# 
# 说明: 6个回文子串: "a", "a", "a", "aa", "aa", "aaa".
# 
# 注意：
#   - 输入的字符串长度不会超过1000。

class Solution:
    def countSubstrings(self, s: str) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.countSubstrings('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
