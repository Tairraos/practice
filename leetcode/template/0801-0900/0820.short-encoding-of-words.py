# https://leetcode-cn.com/problems/short-encoding-of-words/
# 0820.单词的压缩编码
# 难度：中等
# 
# 给定一个单词列表，我们将这个列表编码成一个索引字符串 S 与一个索引列表 A。
# 
# 例如，如果这个列表是 ["time", "me", "bell"]，我们就可以将其表示为 S = "time#bell#" 和 indexes = [0, 2, 5]。
# 对于每一个索引，我们可以通过从字符串 S 中索引的位置开始读取字符串，直到 "#" 结束，来恢复我们之前的单词列表。
# 那么成功对给定单词列表进行编码的最小字符串长度是多少呢？
# 
# 示例：
# 输入: words = ["time", "me", "bell"]
# 输出: 10
# 
# 说明: S = "time#bell#" ， indexes = [0, 2, 5] 。
# 
# 提示：
#   - 1 <= words.length <= 2000
#   - 1 <= words[i].length <= 7
#   - 每个单词都是小写字母 。

class Solution:
    def minimumLengthEncoding(self, words: List[str]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.minimumLengthEncoding('param') == 'expect', 'Case 1'
    assert unit.minimumLengthEncoding('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
