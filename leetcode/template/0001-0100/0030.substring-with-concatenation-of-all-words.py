# https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
# 0030.串联所有单词的子串
# 难度：困难
# 
# 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
# 
# 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
# 
# 示例 1：
# 输入：
#   s = "barfoothefoobarman",
#   words = ["foo","bar"]
# 输出：[0,9]
# 解释：
# 从索引 0 和 9 开始的子串分别是 "barfoor" 和 "foobar" 。
# 输出的顺序不重要, [9,0] 也是有效答案。
# 
# 示例 2：
# 输入：
#   s = "wordgoodgoodgoodbestword",
#   words = ["word","good","best","word"]
# 输出：[]

class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findSubstring('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')