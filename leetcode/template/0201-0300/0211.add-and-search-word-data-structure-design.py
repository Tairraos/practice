# https://leetcode-cn.com/problems/add-and-search-word-data-structure-design/
# 0211.添加与搜索单词 - 数据结构设计
# 难度：中等
# 
# 设计一个支持以下两种操作的数据结构：
# void addWord(word)
# bool search(word)
# 
# search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。 . 可以表示任何一个字母。
# 
# 示例：
# addWord("bad")
# addWord("dad")
# addWord("mad")
# search("pad") -> false
# search("bad") -> true
# search(".ad") -> true
# search("b..") -> true
# 
# 说明：
# 你可以假设所有单词都是由小写字母 a-z 组成的。


class WordDictionary:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        

    def addWord(self, word: str) -> None:
        """
        Adds a word into the data structure.
        """
        

    def search(self, word: str) -> bool:
        """
        Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
        """
        


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', 'Case 1'
    assert unit.__init__('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
