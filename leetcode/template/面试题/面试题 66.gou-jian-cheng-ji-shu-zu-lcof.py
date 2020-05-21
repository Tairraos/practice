# https://leetcode-cn.com/problems/gou-jian-cheng-ji-shu-zu-lcof/
# 面试题 66.构建乘积数组
# 难度：容易
# 
# 给定一个数组 A[0,1,&hellip;,n-1]，请构建一个数组 B[0,1,&hellip;,n-1]，其中 B 中的元素 B[i]=A[0]&times;A[1]&times;&hellip;&times;A[i-1]&times;A[i+1]&times;&hellip;&times;A[n-1]。不能使用除法。
# 
# 示例:
# 输入: [1,2,3,4,5]
# 输出: [120,60,40,30,24]
# 
# 提示：
# 所有元素乘积之和不会溢出 32 位整数
# a.length <= 100000


from typing import *


class Solution:
    def constructArr(self, a: List[int]) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.constructArr('param') == 'expect', 'Case 1'
    assert unit.constructArr('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
