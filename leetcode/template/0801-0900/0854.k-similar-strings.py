# https://leetcode-cn.com/problems/k-similar-strings/
# 0854.相似度为 K 的字符串
# 难度：困难
# 
# 如果可以通过将 A 中的两个小写字母精确地交换位置 K 次得到与 B 相等的字符串，我们称字符串 A 和 B 的相似度为 K（K 为非负整数）。
# 给定两个字母异位词 A 和 B ，返回 A 和 B 的相似度 K 的最小值。
# 
# 示例 1：
# 输入：A = "ab", B = "ba"
# 输出：1
# 
# 示例 2：
# 输入：A = "abc", B = "bca"
# 输出：2
# 
# 示例 3：
# 输入：A = "abac", B = "baca"
# 输出：2
# 
# 示例 4：
# 输入：A = "aabc", B = "abca"
# 输出：2
# 
# 提示：
#   - 1 <= A.length == B.length <= 20
#   - A 和 B 只包含集合 {'a', 'b', 'c', 'd', 'e', 'f'} 中的小写字母。

class Solution:
    def kSimilarity(self, A: str, B: str) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.kSimilarity('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
