# https://leetcode-cn.com/problems/n-queens/
# 0051.N皇后
# 难度：困难
# 
# n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0051.png)
# 上图为 8 皇后问题的一种解法。
# 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
# 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
# 
# 示例：
# 输入: 4
# 输出: [
# [".Q..",  // 解法 1
#   "...Q",
#   "Q...",
#   "..Q."],
# 
# ["..Q.",  // 解法 2
#   "Q...",
#   "...Q",
#   ".Q.."]
# ]
# 解释: 4 皇后问题存在两个不同的解法。

class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.solveNQueens('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
