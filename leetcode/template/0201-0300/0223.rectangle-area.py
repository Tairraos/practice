# https://leetcode-cn.com/problems/rectangle-area/
# 0223.矩形面积
# 难度：中等
# 
# 在二维平面上计算出两个由直线构成的矩形重叠后形成的总面积。
# 每个矩形由其左下顶点和右上顶点坐标表示，如图所示。
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0223.png)
# 
# 示例：
# 输入: -3, 0, 3, 4, 0, -1, 9, 2
# 输出: 45
# 
# 说明: 假设矩形面积不会超出 int 的范围。

class Solution:
    def computeArea(self, A: int, B: int, C: int, D: int, E: int, F: int, G: int, H: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.computeArea('param') == 'expect', 'Case 1'
    assert unit.computeArea('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
