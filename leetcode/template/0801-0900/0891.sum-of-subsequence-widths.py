# https://leetcode-cn.com/problems/sum-of-subsequence-widths/
# 0891.子序列宽度之和
# 难度：困难
# 
# 给定一个整数数组 A ，考虑 A 的所有非空子序列。
# 对于任意序列 S ，设 S 的宽度是 S 的最大元素和最小元素的差。
# 返回 A 的所有子序列的宽度之和。
# 由于答案可能非常大，请返回答案模 10^9+7。
# 
# 示例：
# 输入：[2,1,3]
# 输出：6
# 解释：
# 子序列为 [1]，[2]，[3]，[2,1]，[2,3]，[1,3]，[2,1,3] 。
# 相应的宽度是 0，0，0，1，1，2，2 。
# 这些宽度之和是 6 。
# 
# 提示：
#   - 1 <= A.length <= 20000
#   - 1 <= A[i] <= 20000

class Solution:
    def sumSubseqWidths(self, A: List[int]) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.sumSubseqWidths('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')