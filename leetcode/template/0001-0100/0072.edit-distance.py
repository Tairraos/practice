# https://leetcode-cn.com/problems/edit-distance/
# 0072.编辑距离
# 难度：困难
# 
# 给定两个单词 word1 和 word2，计算出将 word1 转换成 word2 所使用的最少操作数 。
# 你可以对一个单词进行如下三种操作：
#   - 插入一个字符
#   - 删除一个字符
#   - 替换一个字符
# 
# 示例 1：
# 输入: word1 = "horse", word2 = "ros"
# 输出: 3
# 解释：
# horse -> rorse (将 'h' 替换为 'r')
# rorse -> rose (删除 'r')
# rose -> ros (删除 'e')
# 
# 示例 2：
# 输入: word1 = "intention", word2 = "execution"
# 输出: 5
# 解释：
# intention -> inention (删除 't')
# inention -> enention (将 'i' 替换为 'e')
# enention -> exention (将 'n' 替换为 'x')
# exention -> exection (将 'n' 替换为 'c')
# exection -> execution (插入 'u')


class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.minDistance('param') == 'expect', 'Case 1'
    assert unit.minDistance('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
