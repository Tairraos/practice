# https://leetcode-cn.com/problems/random-point-in-non-overlapping-rectangles/
# 0497.非重叠矩形中的随机点
# 难度：中等
# 
# 给定一个非重叠轴对齐矩形的列表 rects，写一个函数 pick 随机均匀地选取矩形覆盖的空间中的整数点。
# 提示：
#   - 整数点是具有整数坐标的点。
#   - 矩形周边上的点包含在矩形覆盖的空间中。
#   - 第 i 个矩形 rects [i] = [x1，y1，x2，y2]，其中 [x1，y1] 是左下角的整数坐标，[x2，y2] 是右上角的整数坐标。
#   - 每个矩形的长度和宽度不超过 2000。
#   - 1 <= rects.length <= 100
#   - pick 以整数坐标数组 [p_x, p_y] 的形式返回一个点。
#   - pick 最多被调用10000次。
# 
# 示例 1：
# 输入：
# ["Solution","pick","pick","pick"]
# [[[[1,1,5,5]]],[],[],[]]
# 输出：
# [null,[4,1],[4,1],[3,3]]
# 
# 示例 2：
# 输入：
# ["Solution","pick","pick","pick","pick","pick"]
# [[[[-2,-2,-1,-1],[1,0,3,0]]],[],[],[],[],[]]
# 输出：
# [null,[-1,-2],[2,0],[-2,-1],[3,0],[-2,-2]]
# 
# 输入语法的说明：
# 输入是两个列表：调用的子例程及其参数。Solution 的构造函数有一个参数，即矩形数组 rects。pick 没有参数。参数总是用列表包装的，即使没有也是如此。

class Solution:

    def __init__(self, rects: List[List[int]]):
        

    def pick(self) -> List[int]:
        


# Your Solution object will be instantiated and called as such:
# obj = Solution(rects)
# param_1 = obj.pick()

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')