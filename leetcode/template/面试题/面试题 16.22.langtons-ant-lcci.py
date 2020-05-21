# https://leetcode-cn.com/problems/langtons-ant-lcci/
# 面试题 16.22.兰顿蚂蚁
# 难度：中等
# 
# 一只蚂蚁坐在由白色和黑色方格构成的无限网格上。开始时，网格全白，蚂蚁面向右侧。每行走一步，蚂蚁执行以下操作。
# 
# (1) 如果在白色方格上，则翻转方格的颜色，向右(顺时针)转 90 度，并向前移动一个单位。
# (2) 如果在黑色方格上，则翻转方格的颜色，向左(逆时针方向)转 90 度，并向前移动一个单位。
# 
# 编写程序来模拟蚂蚁执行的前 K 个动作，并返回最终的网格。
# 
# 网格由数组表示，每个元素是一个字符串，代表网格中的一行，黑色方格由 &#39;X&#39; 表示，白色方格由 &#39;_&#39; 表示，蚂蚁所在的位置由 &#39;L&#39;, &#39;U&#39;, &#39;R&#39;, &#39;D&#39; 表示，分别表示蚂蚁 左、上、右、下 的朝向。只需要返回能够包含蚂蚁走过的所有方格的最小矩形。
# 
# 示例 1:
# 输入: 0
# 输出: ["R"]
# 
# 示例 2:
# 输入: 2
# 输出:
# [
#   "_X",
#   "LX"
# ]
# 
# 示例 3:
# 输入: 5
# 输出:
# [
#   "_U",
#   "X_",
#   "XX"
# ]
# 
# 说明：
# 
# K <= 100000


from typing import *


class Solution:
    def printKMoves(self, K: int) -> List[str]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.printKMoves('param') == 'expect', 'Case 1'
    assert unit.printKMoves('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
