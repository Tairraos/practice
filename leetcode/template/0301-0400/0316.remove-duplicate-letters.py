# https://leetcode-cn.com/problems/remove-duplicate-letters/
# 0316.去除重复字母
# 难度：困难
# 
# 给定一个仅包含小写字母的字符串，去除字符串中重复的字母，使得每个字母只出现一次。需保证返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
# 
# 示例 1：
# 输入: "bcabc"
# 输出: "abc"
# 
# 示例 2：
# 输入: "cbacdcbc"
# 输出: "acdb"


class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.removeDuplicateLetters('param') == 'expect', 'Case 1'
    assert unit.removeDuplicateLetters('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
