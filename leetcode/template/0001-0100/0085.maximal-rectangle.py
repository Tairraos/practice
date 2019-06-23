# https://leetcode-cn.com/problems/maximal-rectangle/
# 0085.最大矩形
# 难度：困难
# 
# 给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
# 
# 示例：
# 输入：
# [
#   ["1","0","1","0","0"],
#   ["1","0","1","1","1"],
#   ["1","1","1","1","1"],
#   ["1","0","0","1","0"]
# ]
# 输出: 6

class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maximalRectangle('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
