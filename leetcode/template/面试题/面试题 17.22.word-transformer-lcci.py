# https://leetcode-cn.com/problems/word-transformer-lcci/
# 面试题 17.22.单词转换
# 难度：中等
# 
# 给定字典中的两个词，长度相等。写一个方法，把一个词转换成另一个词， 但是一次只能改变一个字符。每一步得到的新词都必须能在字典中找到。
# 
# 编写一个程序，返回一个可能的转换序列。如有多个可能的转换序列，你可以返回任何一个。
# 
# 示例 1:
# 输入:
# beginWord = "hit",
# endWord = "cog",
# wordList = ["hot","dot","dog","lot","log","cog"]
# 
# 输出:
# ["hit","hot","dot","lot","log","cog"]
# 
# 示例 2:
# 输入:
# beginWord = "hit"
# endWord = "cog"
# wordList = ["hot","dot","dog","lot","log"]
# 
# 输出: []
# 
# 解释: endWord "cog" 不在字典中，所以不存在符合要求的转换序列。


from typing import *


class Solution:
    def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[str]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findLadders('param') == 'expect', 'Case 1'
    assert unit.findLadders('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
