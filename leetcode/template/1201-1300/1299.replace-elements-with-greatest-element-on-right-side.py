# https://leetcode-cn.com/problems/replace-elements-with-greatest-element-on-right-side/
# 1299.将每个元素替换为右侧最大元素
# 难度：容易
# 
# 给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。
# 
# 完成所有替换操作后，请你返回这个数组。
# 
# 示例：
# 输入：arr = [17,18,5,4,6,1]
# 输出：[18,6,6,6,1,-1]
# 
# 提示：
# 1 <= arr.length <= 10^4
# 1 <= arr[i] <= 10^5


from typing import *


class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.replaceElements('param') == 'expect', 'Case 1'
    assert unit.replaceElements('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
