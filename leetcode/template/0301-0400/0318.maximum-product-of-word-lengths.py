# https://leetcode-cn.com/problems/maximum-product-of-word-lengths/
# 0318.最大单词长度乘积
# 难度：中等
# 
# 给定一个字符串数组 words，找到 length(word[i]) * length(word[j]) 的最大值，并且这两个单词不含有公共字母。你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。
# 
# 示例 1：
# 输入: ["abcw","baz","foo","bar","xtfn","abcdef"]
# 输出: 16
# 解释: 这两个单词为 "abcw", "xtfn"。
# 
# 示例 2：
# 输入: ["a","ab","abc","d","cd","bcd","abcd"]
# 输出: 4
# 解释: 这两个单词为 "ab", "cd"。
# 
# 示例 3：
# 输入: ["a","aa","aaa","aaaa"]
# 输出: 0
# 解释: 不存在这样的两个单词。


from typing import *


class Solution:
    def maxProduct(self, words: List[str]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maxProduct('param') == 'expect', 'Case 1'
    assert unit.maxProduct('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
