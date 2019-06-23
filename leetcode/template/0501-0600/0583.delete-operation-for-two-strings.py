# https://leetcode-cn.com/problems/delete-operation-for-two-strings/
# 0583.两个字符串的删除操作
# 难度：中等
# 
# 给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，每步可以删除任意一个字符串中的一个字符。
# 
# 示例 1：
# 输入: "sea", "eat"
# 输出: 2
# 解释: 第一步将"sea"变为"ea"，第二步将"eat"变为"ea"
# 
# 说明：
#   - 给定单词的长度不超过500。
#   - 给定单词中的字符只含有小写字母。

class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.minDistance('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
