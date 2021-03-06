# https://leetcode-cn.com/problems/interval-list-intersections/
# 0986.区间列表的交集
# 难度：中等
# 
# 给定两个由一些闭区间组成的列表，每个区间列表都是成对不相交的，并且已经排序。
# 返回这两个区间列表的交集。
# （形式上，闭区间 [a, b]（其中 a <= b）表示实数 x 的集合，而 a <= x <= b。两个闭区间的交集是一组实数，要么为空集，要么为闭区间。例如，[1, 3] 和 [2, 4] 的交集为 [2, 3]。）
# 
# 示例：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0986.png)
# 输入：A = [[0,2],[5,10],[13,23],[24,25]], B = [[1,5],[8,12],[15,24],[25,26]]
# 输出：[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
# 
# 注意：输入和所需的输出都是区间对象组成的列表，而不是数组或列表。
# 
# 提示：
#   - 0 <= A.length < 1000
#   - 0 <= B.length < 1000
#   - 0 <= A[i].start, A[i].end, B[i].start, B[i].end < 10^9


from typing import *


class Solution:
    def intervalIntersection(self, A: List[List[int]], B: List[List[int]]) -> List[List[int]]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.intervalIntersection('param') == 'expect', 'Case 1'
    assert unit.intervalIntersection('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
