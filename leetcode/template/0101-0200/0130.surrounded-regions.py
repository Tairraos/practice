# https://leetcode-cn.com/problems/surrounded-regions/
# 0130.被围绕的区域
# 难度：中等
# 
# 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
# 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
# 
# 示例：
# X X X X
# X O O X
# X X O X
# X O X X
# 
# 运行你的函数后，矩阵变为：
# X X X X
# X X X X
# X X X X
# X O X X
# 
# 解释：
# 被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。

class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.solve('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
