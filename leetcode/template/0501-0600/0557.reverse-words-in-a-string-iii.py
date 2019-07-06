# https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
# 0557.反转字符串中的单词 III
# 难度：容易
# 
# 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
# 
# 示例 1：
# 输入: "Let's take LeetCode contest"
# 输出: "s'teL ekat edoCteeL tsetnoc"
# 
# 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

class Solution:
    def reverseWords(self, s: str) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.reverseWords('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
