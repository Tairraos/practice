# https://leetcode-cn.com/problems/max-black-square-lcci/
# 面试题 17.23.最大黑方阵
# 难度：中等
# 
# 给定一个方阵，其中每个单元(像素)非黑即白。设计一个算法，找出 4 条边皆为黑色像素的最大子方阵。
# 
# 返回一个数组 [r, c, size] ，其中 r, c 分别代表子方阵左上角的行号和列号，size 是子方阵的边长。若有多个满足条件的子方阵，返回 r 最小的，若 r 相同，返回 c 最小的子方阵。若无满足条件的子方阵，返回空数组。
# 
# 示例 1:
# 输入:
# [
#    [1,0,1],
#    [0,0,1],
#    [0,0,1]
# ]
# 输出: [1,0,2]
# 解释: 输入中 0 代表黑色，1 代表白色，标粗的元素即为满足条件的最大子方阵
# 
# 示例 2:
# 输入:
# [
#    [0,1,1],
#    [1,0,1],
#    [1,1,0]
# ]
# 输出: [0,0,1]
# 
# 提示：
# matrix.length == matrix[0].length <= 200


from typing import *


class Solution:
    def findSquare(self, matrix: List[List[int]]) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findSquare('param') == 'expect', 'Case 1'
    assert unit.findSquare('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
