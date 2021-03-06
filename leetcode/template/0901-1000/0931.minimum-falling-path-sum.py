# https://leetcode-cn.com/problems/minimum-falling-path-sum/
# 0931.下降路径最小和
# 难度：中等
# 
# 给定一个方形整数数组 A，我们想要得到通过 A 的下降路径的最小和。
# 下降路径可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列。
# 
# 示例：
# 输入：[[1,2,3],[4,5,6],[7,8,9]]
# 输出：12
# 解释：
# 可能的下降路径有：
# 
#   - [1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
#   - [2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
#   - [3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]
# 
# 和最小的下降路径是 [1,4,7]，所以答案是 12。
# 
# 提示：
#   - 1 <= A.length == A[0].length <= 100
#   - -100 <= A[i][j] <= 100


from typing import *


class Solution:
    def minFallingPathSum(self, A: List[List[int]]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.minFallingPathSum('param') == 'expect', 'Case 1'
    assert unit.minFallingPathSum('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
