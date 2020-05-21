# https://leetcode-cn.com/problems/eight-queens-lcci/
# 面试题 08.12.八皇后
# 难度：困难
# 
# 设计一种算法，打印 N 皇后在 N &times; N 棋盘上的各种摆法，其中每个皇后都不同行、不同列，也不在对角线上。这里的&ldquo;对角线&rdquo;指的是所有的对角线，不只是平分整个棋盘的那两条对角线。
# 
# 注意：本题相对原题做了扩展
# 
# 示例:
#  输入：4
#  输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
#  解释: 4 皇后问题存在如下两个不同的解法。
# [
#  [".Q..",  // 解法 1
#   "...Q",
#   "Q...",
#   "..Q."],
# 
#  ["..Q.",  // 解法 2
#   "Q...",
#   "...Q",
#   ".Q.."]
# ]


from typing import *


class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.solveNQueens('param') == 'expect', 'Case 1'
    assert unit.solveNQueens('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
