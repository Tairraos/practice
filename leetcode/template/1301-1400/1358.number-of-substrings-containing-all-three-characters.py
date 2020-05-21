# https://leetcode-cn.com/problems/number-of-substrings-containing-all-three-characters/
# 1358.包含所有三种字符的子字符串数目
# 难度：中等
# 
# 给你一个字符串 s ，它只包含三种字符 a, b 和 c 。
# 
# 请你返回 a，b 和 c 都 至少 出现过一次的子字符串数目。
# 
# 示例 1：
# 输入：s = "abcabc"
# 输出：10
# 解释：包含 a，b 和 c 各至少一次的子字符串为 "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" 和 "abc" (相同字符串算多次)。
# 
# 示例 2：
# 输入：s = "aaacb"
# 输出：3
# 解释：包含 a，b 和 c 各至少一次的子字符串为 "aaacb", "aacb" 和 "acb" 。
# 
# 示例 3：
# 输入：s = "abc"
# 输出：1
# 
# 提示：
# 3 <= s.length <= 5 x 10^4
# s 只包含字符 a，b 和 c 。


class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.numberOfSubstrings('param') == 'expect', 'Case 1'
    assert unit.numberOfSubstrings('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
