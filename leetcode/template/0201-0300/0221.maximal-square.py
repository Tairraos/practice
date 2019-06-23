# https://leetcode-cn.com/problems/maximal-square/
# 0221.最大正方形
# 难度：中等
# 
# 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
# 
# 示例：
# 输入：
# 
# 1 0 1 0 0
# 1 0 1 1 1
# 1 1 1 1 1
# 1 0 0 1 0
# 
# 输出: 4

class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maximalSquare('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
