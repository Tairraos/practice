# https://leetcode-cn.com/problems/jian-sheng-zi-lcof/
# 面试题14- I.剪绳子
# 难度：中等
# 
# 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m] 。请问 k[0]*k[1]*...*k[m] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
# 
# 示例 1：
# 输入: 2
# 输出: 1
# 解释: 2 = 1 + 1, 1 &times; 1 = 1
# 
# 示例 2:
# 输入: 10
# 输出: 36
# 解释: 10 = 3 + 3 + 4, 3 &times; 3 &times; 4 = 36
# 
# 提示：
# 2 <= n <= 58
# 
# 注意：本题与主站 343 题相同：https://leetcode-cn.com/problems/integer-break/


class Solution:
    def cuttingRope(self, n: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.cuttingRope('param') == 'expect', 'Case 1'
    assert unit.cuttingRope('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
