# https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
# 0003.无重复字符的最长子串
# 难度：中等
#
# 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
#
# 示例 1：
# 输入: "abcabcbb"
# 输出: 3
# 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
#
# 示例 2：
# 输入: "bbbbb"
# 输出: 1
# 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
#
# 示例 3：
# 输入: "pwwkew"
# 输出: 3
# 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
#      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        lens = 0
        for i in range(len(s)):
            for j in range(i + lens, len(s) + 1):
                if len(set(s[i:j])) == j - i:  # 用Set去重后，如果尺寸没有变化说明不重复
                    lens = j - i
                else:
                    break
        return lens


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.lengthOfLongestSubstring('abcabcbb') == 3, 'Case 1'
    assert unit.lengthOfLongestSubstring('bbbbb') == 1, 'Case 2'
    assert unit.lengthOfLongestSubstring('pwwkew') == 3, 'Case 3'
    assert unit.lengthOfLongestSubstring('') == 0, 'Case 4'
    assert unit.lengthOfLongestSubstring('au') == 2, 'Case 5'
    assert unit.lengthOfLongestSubstring('uqinntq') == 4, 'Case 6'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
