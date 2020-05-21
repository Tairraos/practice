# https://leetcode-cn.com/problems/longest-happy-string/
# 1405.最长快乐字符串
# 难度：中等
# 
# 如果字符串中不含有任何 &#39;aaa&#39;，&#39;bbb&#39; 或 &#39;ccc&#39; 这样的字符串作为子串，那么该字符串就是一个「快乐字符串」。
# 
# 给你三个整数 a，b ，c，请你返回 任意一个 满足下列全部条件的字符串 s：
# 
# s 是一个尽可能长的快乐字符串。
# s 中 最多 有a 个字母 &#39;a&#39;、b 个字母 &#39;b&#39;、c 个字母 &#39;c&#39; 。
# s 中只含有 &#39;a&#39;、&#39;b&#39; 、&#39;c&#39; 三种字母。
# 
# 如果不存在这样的字符串 s ，请返回一个空字符串 ""。
# 
# 示例 1：
# 输入：a = 1, b = 1, c = 7
# 输出："ccaccbcc"
# 解释："ccbccacc" 也是一种正确答案。
# 
# 示例 2：
# 输入：a = 2, b = 2, c = 1
# 输出："aabbc"
# 
# 示例 3：
# 输入：a = 7, b = 1, c = 0
# 输出："aabaa"
# 解释：这是该测试用例的唯一正确答案。
# 
# 提示：
# 0 <= a, b, c <= 100
# a + b + c > 0


class Solution:
    def longestDiverseString(self, a: int, b: int, c: int) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.longestDiverseString('param') == 'expect', 'Case 1'
    assert unit.longestDiverseString('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
