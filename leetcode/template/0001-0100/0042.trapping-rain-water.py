# https://leetcode-cn.com/problems/trapping-rain-water/
# 0042.接雨水
# 难度：困难
# 
# 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0042.png)
# 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。
# 
# 示例：
# 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
# 输出: 6

class Solution:
    def trap(self, height: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.trap('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
