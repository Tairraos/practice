# https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters/
# 1081.不同字符的最小子序列
# 难度：中等
# 
# 返回字符串 text 中按字典序排列最小的子序列，该子序列包含 text 中所有不同字符一次。
# 
# 示例 1：
# 输入："cdadabcc"
# 输出："adbc"
# 
# 示例 2：
# 输入："abcd"
# 输出："abcd"
# 
# 示例 3：
# 输入："ecbacba"
# 输出："eacb"
# 
# 示例 4：
# 输入："leetcode"
# 输出："letcod"
# 
# 提示：
# 1 <= text.length <= 1000
# text 由小写英文字母组成

class Solution:
    def smallestSubsequence(self, text: str) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.smallestSubsequence('param') == 'expect', 'Case 1'
    assert unit.smallestSubsequence('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
