# https://leetcode-cn.com/problems/swap-for-maximum-repeated-substring/
# 1156.单字符重复子串的最大长度
# 难度：中等
# 
# 如果字符串中的所有字符都相同，那么这个字符串是单字符重复的字符串。
# 
# 给你一个字符串 text，你只能交换其中两个字符一次或者什么都不做，然后得到一些单字符重复的子串。返回其中最长的子串的长度。
# 
# 示例 1：
# 输入：text = "ababa"
# 输出：3
# 
# 示例 2：
# 输入：text = "aaabaaa"
# 输出：6
# 
# 示例 3：
# 输入：text = "aaabbaaa"
# 输出：4
# 
# 示例 4：
# 输入：text = "aaaaa"
# 输出：5
# 
# 示例 5：
# 输入：text = "abcdef"
# 输出：1
# 
# 提示：
# 1 <= text.length <= 20000
# text 仅由小写英文字母组成。

class Solution:
    def maxRepOpt1(self, text: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maxRepOpt1('param') == 'expect', 'Case 1'
    assert unit.maxRepOpt1('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
