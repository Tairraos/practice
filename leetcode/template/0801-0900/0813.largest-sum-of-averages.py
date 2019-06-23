# https://leetcode-cn.com/problems/largest-sum-of-averages/
# 0813.最大平均值和的分组
# 难度：中等
# 
# 我们将给定的数组 A 分成 K 个相邻的非空子数组 ，我们的分数由每个子数组内的平均值的总和构成。计算我们所能得到的最大分数是多少。
# 
# 注意我们必须使用 A 数组中的每一个数进行分组，并且分数不一定需要是整数。
# 示例：
# 输入：
# A = [9,1,2,3,9]
# K = 3
# 输出: 20
# 解释：
# A 的最优分组是[9], [1, 2, 3], [9]. 得到的分数是 9 + (1 + 2 + 3) / 3 + 9 = 20.
# 我们也可以把 A 分成[9, 1], [2], [3, 9].
# 这样的分组得到的分数为 5 + 2 + 6 = 13, 但不是最大值.
# 
# 说明：
#   - 1 <= A.length <= 100.
#   - 1 <= A[i] <= 10000.
#   - 1 <= K <= A.length.
#   - 答案误差在 10^-6 内被视为是正确的。

class Solution:
    def largestSumOfAverages(self, A: List[int], K: int) -> float:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.largestSumOfAverages('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
