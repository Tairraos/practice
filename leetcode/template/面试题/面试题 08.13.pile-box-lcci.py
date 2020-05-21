# https://leetcode-cn.com/problems/pile-box-lcci/
# 面试题 08.13.堆箱子
# 难度：困难
# 
# 堆箱子。给你一堆n个箱子，箱子宽 wi、高hi、深di。箱子不能翻转，将箱子堆起来时，下面箱子的宽度、高度和深度必须大于上面的箱子。实现一种方法，搭出最高的一堆箱子。箱堆的高度为每个箱子高度的总和。
# 
# 输入使用数组[wi, di, hi]表示每个箱子。
# 
# 示例1:
#  输入：box = [[1, 1, 1], [2, 2, 2], [3, 3, 3]]
#  输出：6
# 
# 示例2:
#  输入：box = [[1, 1, 1], [2, 3, 4], [2, 6, 7], [3, 4, 5]]
#  输出：10
# 
# 提示:
# 箱子的数目不大于3000个。


from typing import *


class Solution:
    def pileBox(self, box: List[List[int]]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.pileBox('param') == 'expect', 'Case 1'
    assert unit.pileBox('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
