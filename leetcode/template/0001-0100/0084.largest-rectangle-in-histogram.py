# https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
# 0084.柱状图中最大的矩形
# 难度：困难
# 
# 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
# 求在该柱状图中，能够勾勒出来的矩形的最大面积。
# 
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0084-1.png)
# 以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。
# 
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0084-2.png)
# 图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。
# 
# 示例：
# 输入: [2,1,5,6,2,3]
# 输出: 10

class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.largestRectangleArea('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
