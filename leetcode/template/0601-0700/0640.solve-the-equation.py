# https://leetcode-cn.com/problems/solve-the-equation/
# 0640.求解方程
# 难度：中等
# 
# 求解一个给定的方程，将x以字符串"x=#value"的形式返回。该方程仅包含'+'，' - '操作，变量 x 和其对应系数。
# 如果方程没有解，请返回“No solution”。
# 如果方程有无限解，则返回“Infinite solutions”。
# 如果方程中只有一个解，要保证返回值 x 是一个整数。
# 
# 示例 1：
# 输入: "x+5-3+x=6+x-2"
# 输出: "x=2"
# 
# 示例 2：
# 输入: "x=x"
# 输出: "Infinite solutions"
# 
# 示例 3：
# 输入: "2x=x"
# 输出: "x=0"
# 
# 示例 4：
# 输入: "2x+3x-6x=x+2"
# 输出: "x=-1"
# 
# 示例 5：
# 输入: "x=x+2"
# 输出: "No solution"

class Solution:
    def solveEquation(self, equation: str) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.solveEquation('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
