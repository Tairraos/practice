# https://leetcode-cn.com/problems/largest-triangle-area/
# 0812.最大三角形面积
# 难度：容易
# 
# 给定包含多个点的集合，从其中取三个点组成三角形，返回能组成的最大三角形的面积。
# 示例：
# 输入: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
# 输出: 2
# 解释：
# 这五个点如下图所示。组成的橙色三角形是最大的，面积为2。
# 
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0812.png)
# 
# 注意：
#   - 3 <= points.length <= 50.
#   - 不存在重复的点。
#   -  -50 <= points[i][j] <= 50.
#   - 结果误差值在 10^-6 以内都认为是正确答案。

class Solution:
    def largestTriangleArea(self, points: List[List[int]]) -> float:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.largestTriangleArea('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')