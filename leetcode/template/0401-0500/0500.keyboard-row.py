# https://leetcode-cn.com/problems/keyboard-row/
# 0500.键盘行
# 难度：容易
# 
# 给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。
# 
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0500.png)
# 
# 示例：
# 输入: ["Hello", "Alaska", "Dad", "Peace"]
# 输出: ["Alaska", "Dad"]
# 
# 注意：
#   - 你可以重复使用键盘上同一字符。
#   - 你可以假设输入的字符串将只包含字母。

class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findWords('param') == 'expect', 'Case 1'
    assert unit.findWords('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
