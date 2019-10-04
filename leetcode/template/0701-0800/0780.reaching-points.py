# https://leetcode-cn.com/problems/reaching-points/
# 0780.到达终点
# 难度：困难
# 
# 从点 (x, y) 可以转换到 (x, x+y)  或者 (x+y, y)。
# 给定一个起点 (sx, sy) 和一个终点 (tx, ty)，如果通过一系列的转换可以从起点到达终点，则返回 True ，否则返回 False。
# 示例：
# 输入: sx = 1, sy = 1, tx = 3, ty = 5
# 输出: True
# 解释：
# 可以通过以下一系列转换从起点转换到终点：
# (1, 1) -> (1, 2)
# (1, 2) -> (3, 2)
# (3, 2) -> (3, 5)
# 
# 输入: sx = 1, sy = 1, tx = 2, ty = 2
# 输出: False
# 
# 输入: sx = 1, sy = 1, tx = 1, ty = 1
# 输出: True
# 
# 注意：
#   - sx, sy, tx, ty 是范围在 [1, 10^9] 的整数。


class Solution:
    def reachingPoints(self, sx: int, sy: int, tx: int, ty: int) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.reachingPoints('param') == 'expect', 'Case 1'
    assert unit.reachingPoints('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
