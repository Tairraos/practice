# https://leetcode-cn.com/problems/shortest-common-supersequence/
# 1092.最短公共超序列
# 难度：困难
# 
# 给出两个字符串 str1 和 str2，返回同时以 str1 和 str2 作为子序列的最短字符串。如果答案不止一个，则可以返回满足条件的任意一个答案。
# 
# （如果从字符串 T 中删除一些字符（也可能不删除，并且选出的这些字符可以位于 T 中的 任意位置），可以得到字符串 S，那么 S 就是 T 的子序列）
# 
# 示例：
# 输入：str1 = "abac", str2 = "cab"
# 输出："cabac"
# 解释：
# str1 = "abac" 是 "cabac" 的一个子串，因为我们可以删去 "cabac" 的第一个 "c"得到 "abac"。 
# str2 = "cab" 是 "cabac" 的一个子串，因为我们可以删去 "cabac" 末尾的 "ac" 得到 "cab"。
# 最终我们给出的答案是满足上述属性的最短字符串。
# 
# 提示：
# 1 <= str1.length, str2.length <= 1000
# str1 和 str2 都由小写英文字母组成。

class Solution:
    def shortestCommonSupersequence(self, str1: str, str2: str) -> str:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.shortestCommonSupersequence('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
