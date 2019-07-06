# https://leetcode-cn.com/problems/sudoku-solver/
# 0037.解数独
# 难度：困难
# 
# 编写一个程序，通过已填充的空格来解决数独问题。
# 
# 一个数独的解法需遵循如下规则：
#   - 数字 1-9 在每一行只能出现一次。
#   - 数字 1-9 在每一列只能出现一次。
#   - 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
# 
# 空白格用 '.' 表示。
# [示意图](https://github.com/Tairraos/practice/tree/master/leetcode/figs/0036.png)
# 一个数独。
# 
# [示意图](https://github.com/Tairraos/practice/tree/master/leetcode/figs/0037.png)
# 答案被标成红色。
# 
# Note：
#   - 给定的数独序列只包含数字 1-9 和字符 '.' 。
#   - 你可以假设给定的数独只有唯一解。
#   - 给定数独永远是 9x9 形式的。

class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.solveSudoku('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
