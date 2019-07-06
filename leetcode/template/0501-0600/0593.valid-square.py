# https://leetcode-cn.com/problems/valid-square/
# 0593.有效的正方形
# 难度：中等
# 
# 给定二维空间中四点的坐标，返回四点是否可以构造一个正方形。
# 一个点的坐标（x，y）由一个有两个整数的整数数组表示。
# 
# 示例：
# 输入: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
# 输出: True
# 
# 注意：
#   - 所有输入整数都在 [-10000，10000] 范围内。
#   - 一个有效的正方形有四个等长的正长和四个等角（90度角）。
#   - 输入点没有顺序。

class Solution:
    def validSquare(self, p1: List[int], p2: List[int], p3: List[int], p4: List[int]) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.validSquare('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
