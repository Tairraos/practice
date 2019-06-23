# https://leetcode-cn.com/problems/longest-repeating-character-replacement/
# 0424.替换后的最长重复字符
# 难度：中等
# 
# 给你一个仅由大写英文字母组成的字符串，你可以将任意位置上的字符替换成另外的字符，总共可最多替换 k 次。在执行上述操作后，找到包含重复字母的最长子串的长度。
# 
# 注意：
# 字符串长度 和 k 不会超过 10^4。
# 
# 示例 1：
# 输入：
# s = "ABAB", k = 2
# 
# 输出：
# 4
# 
# 解释：
# 用两个'A'替换为两个'B',反之亦然。
# 
# 示例 2：
# 输入：
# s = "AABABBA", k = 1
# 
# 输出：
# 4
# 
# 解释：
# 将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
# 子串 "BBBB" 有最长重复字母, 答案为 4。

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.characterReplacement('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
