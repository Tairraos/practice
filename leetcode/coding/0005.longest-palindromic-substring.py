# https://leetcode-cn.com/problems/longest-palindromic-substring/
# 0005.最长回文子串
# 难度：中等
# 
# 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
# 
# 示例 1：
# 输入: "babad"
# 输出: "bab"
# 
# 注意: "aba" 也是一个有效答案。
# 
# 示例 2：
# 输入: "cbbd"
# 输出: "bb"

class Solution:
    def longestPalindrome(self, s: str) -> str:
        result = s[0] if len(s) else "" # 答案预设为空或第一个字符
        pointer = length = 0
        while(pointer < len(s) - length):
            length += 1
            tempStr = s[pointer : pointer + length]
            if tempStr[::-1] == tempStr: # 如果是回文则更新答案
                result = tempStr
            if pointer + length >= len(s):
                pointer += 1 # 没有匹配的话指针向后移
                length = len(result) # 比现有答案更短的答案不需要寻找
        return result


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.longestPalindrome('') == '', 'Case 0'
    assert unit.longestPalindrome('b') == 'b', 'Case 1'
    assert unit.longestPalindrome('babad') == 'bab', 'Case 2'
    assert unit.longestPalindrome('cbbd') == 'bb', 'Case 3'
    assert unit.longestPalindrome('ssabcbaadd') == 'abcba', 'Case 4'
    assert unit.longestPalindrome('abcbaass') == 'abcba', 'Case 5'
    assert unit.longestPalindrome('ssabcbaa') == 'abcba', 'Case 6'
    assert unit.longestPalindrome('bbbbbbbbbb') == 'bbbbbbbbbb', 'Case 7'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
