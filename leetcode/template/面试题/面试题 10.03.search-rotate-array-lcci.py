# https://leetcode-cn.com/problems/search-rotate-array-lcci/
# 面试题 10.03.搜索旋转数组
# 难度：中等
# 
# 搜索旋转数组。给定一个排序后的数组，包含n个整数，但这个数组已被旋转过很多次了，次数不详。请编写代码找出数组中的某个元素，假设数组元素原先是按升序排列的。若有多个相同元素，返回索引值最小的一个。
# 
# 示例1:
#  输入: arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], target = 5
#  输出: 8（元素5在该数组中的索引）
# 
# 示例2:
#  输入：arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], target = 11
#  输出：-1 （没有找到）
# 
# 提示:
# arr 长度范围在[1, 1000000]之间


from typing import *


class Solution:
    def search(self, arr: List[int], target: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.search('param') == 'expect', 'Case 1'
    assert unit.search('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
