# https://leetcode-cn.com/problems/sub-sort-lcci/
# 面试题 16.16.部分排序
# 难度：中等
# 
# 给定一个整数数组，编写一个函数，找出索引m和n，只要将索引区间[m,n]的元素排好序，整个数组就是有序的。注意：n-m尽量最小，也就是说，找出符合条件的最短序列。函数返回值为[m,n]，若不存在这样的m和n（例如整个数组是有序的），请返回[-1,-1]。
# 示例：
# 输入： [1,2,4,7,10,11,7,12,6,7,16,18,19]
# 输出： [3,9]
# 
# 提示：
# 0


from typing import *


class Solution:
    def subSort(self, array: List[int]) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.subSort('param') == 'expect', 'Case 1'
    assert unit.subSort('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
