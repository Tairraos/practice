# https://leetcode-cn.com/problems/largest-multiple-of-three/
# 1363.形成三的最大倍数
# 难度：困难
# 
# 给你一个整数数组 digits，你可以通过按任意顺序连接其中某些数字来形成 3 的倍数，请你返回所能得到的最大的 3 的倍数。
# 
# 由于答案可能不在整数数据类型范围内，请以字符串形式返回答案。
# 
# 如果无法得到答案，请返回一个空字符串。
# 
# 示例 1：
# 输入：digits = [8,1,9]
# 输出："981"
# 
# 示例 2：
# 输入：digits = [8,6,7,1,0]
# 输出："8760"
# 
# 示例 3：
# 输入：digits = [1]
# 输出：""
# 
# 示例 4：
# 输入：digits = [0,0,0,0,0,0]
# 输出："0"
# 
# 提示：
# 1 <= digits.length <= 10^4
# 0 <= digits[i] <= 9
# 返回的结果不应包含不必要的前导零。


from typing import *


class Solution:
    def largestMultipleOfThree(self, digits: List[int]) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.largestMultipleOfThree('param') == 'expect', 'Case 1'
    assert unit.largestMultipleOfThree('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')