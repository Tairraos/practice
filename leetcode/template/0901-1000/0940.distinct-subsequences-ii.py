# https://leetcode-cn.com/problems/distinct-subsequences-ii/
# 0940.不同的子序列 II
# 难度：困难
# 
# 给定一个字符串 S，计算 S 的不同非空子序列的个数。
# 因为结果可能很大，所以返回答案模 10^9 + 7.
# 
# 示例 1：
# 输入："abc"
# 输出：7
# 解释：7 个不同的子序列分别是 "a", "b", "c", "ab", "ac", "bc", 以及 "abc"。
# 
# 示例 2：
# 输入："aba"
# 输出：6
# 解释：6 个不同的子序列分别是 "a", "b", "ab", "ba", "aa" 以及 "aba"。
# 
# 示例 3：
# 输入："aaa"
# 输出：3
# 解释：3 个不同的子序列分别是 "a", "aa" 以及 "aaa"。
# 
# 提示：
#   - S 只包含小写字母。
#   - 1 <= S.length <= 2000

class Solution:
    def distinctSubseqII(self, S: str) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.distinctSubseqII('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')