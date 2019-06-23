# https://leetcode-cn.com/problems/count-the-repetitions/
# 0466.统计重复个数
# 难度：困难
# 
# 定义由 n 个连接的字符串 s 组成字符串 S，即 S = [s,n]。例如，["abc", 3]=“abcabcabc”。
# 另一方面，如果我们可以从 s2 中删除某些字符使其变为 s1，我们称字符串 s1 可以从字符串 s2 获得。例如，“abc” 可以根据我们的定义从 “abdbec” 获得，但不能从 “acbbe” 获得。
# 现在给出两个非空字符串 S1 和 S2（每个最多 100 个字符长）和两个整数 0 ≤ N1 ≤ 10^6 和 1 ≤ N2 ≤ 10^6。现在考虑字符串 S1 和 S2，其中S1=[s1,n1]和S2=[s2,n2]。找出可以使[S2,M]从 S1 获得的最大整数 M。
# 
# 示例：
# 输入：
# s1 ="acb",n1 = 4
# s2 ="ab",n2 = 2
# 
# 返回：
# 2

class Solution:
    def getMaxRepetitions(self, s1: str, n1: int, s2: str, n2: int) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.getMaxRepetitions('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
