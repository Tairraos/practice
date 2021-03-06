# https://leetcode-cn.com/problems/maximum-students-taking-exam/
# 1349.参加考试的最大学生数
# 难度：困难
# 
# 给你一个 m * n 的矩阵 seats 表示教室中的座位分布。如果座位是坏的（不可用），就用 &#39;#&#39; 表示；否则，用 &#39;.&#39; 表示。
# 
# 学生可以看到左侧、右侧、左上、右上这四个方向上紧邻他的学生的答卷，但是看不到直接坐在他前面或者后面的学生的答卷。请你计算并返回该考场可以容纳的一起参加考试且无法作弊的最大学生人数。
# 
# 学生必须坐在状况良好的座位上。
# 
# 示例 1：
# 输入：seats = [["#",".","#","#",".","#"],
#               [".","#","#","#","#","."],
#               ["#",".","#","#",".","#"]]
# 输出：4
# 解释：教师可以让 4 个学生坐在可用的座位上，这样他们就无法在考试中作弊。 
# 
# 示例 2：
# 输入：seats = [[".","#"],
#               ["#","#"],
#               ["#","."],
#               ["#","#"],
#               [".","#"]]
# 输出：3
# 解释：让所有学生坐在可用的座位上。
# 
# 示例 3：
# 输入：seats = [["#",".",".",".","#"],
#               [".","#",".","#","."],
#               [".",".","#",".","."],
#               [".","#",".","#","."],
#               ["#",".",".",".","#"]]
# 输出：10
# 解释：让学生坐在第 1、3 和 5 列的可用座位上。
# 
# 提示：
# seats 只包含字符 &#39;.&#39; 和&#39;#&#39;
# m == seats.length
# n == seats[i].length
# 1 <= m <= 8
# 1 <= n <= 8


from typing import *


class Solution:
    def maxStudents(self, seats: List[List[str]]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maxStudents('param') == 'expect', 'Case 1'
    assert unit.maxStudents('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
