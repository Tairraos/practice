# https://leetcode-cn.com/problems/find-the-shortest-superstring/
# 0943.最短超级串
# 难度：困难
# 
# 给定一个字符串数组 A，找到以 A 中每个字符串作为子字符串的最短字符串。
# 我们可以假设 A 中没有字符串是 A 中另一个字符串的子字符串。
# 
# 示例 1：
# 输入：["alex","loves","leetcode"]
# 输出："alexlovesleetcode"
# 解释："alex"，"loves"，"leetcode" 的所有排列都会被接受。
# 
# 示例 2：
# 输入：["catg","ctaagt","gcta","ttca","atgcatc"]
# 输出："gctaagttcatgcatc"
# 提示：
#   - 1 <= A.length <= 12
#   - 1 <= A[i].length <= 20

class Solution:
    def shortestSuperstring(self, A: List[str]) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.shortestSuperstring('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
