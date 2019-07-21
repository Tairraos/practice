# https://leetcode-cn.com/problems/number-of-matching-subsequences/
# 0792.匹配子序列的单词数
# 难度：中等
# 
# 给定字符串 S 和单词字典 words, 求 words[i] 中是 S 的子序列的单词个数。
# 示例：
# 输入：
# S = "abcde"
# words = ["a", "bb", "acd", "ace"]
# 输出: 3
# 解释: 有三个是 S 的子序列的单词: "a", "acd", "ace"。
# 
# 注意：
#   - 所有在words和 S 里的单词都只由小写字母组成。
#   - S 的长度在 [1, 50000]。
#   - words 的长度在 [1, 5000]。
#   - words[i]的长度在[1, 50]。

class Solution:
    def numMatchingSubseq(self, S: str, words: List[str]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.numMatchingSubseq('param') == 'expect', 'Case 1'
    assert unit.numMatchingSubseq('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
