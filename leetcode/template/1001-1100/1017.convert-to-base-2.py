# https://leetcode-cn.com/problems/convert-to-base-2/
# 1017.负二进制转换
# 难度：中等
# 
# 给出数字 N，返回由若干 "0" 和 "1"组成的字符串，该字符串为 N 的负二进制（base -2）表示。
# 
# 除非字符串就是 "0"，否则返回的字符串中不能含有前导零。
# 
# 示例 1：
# 输入：2
# 输出："110"
# 解释：(-2) ^ 2 + (-2) ^ 1 = 2
# 
# 示例 2：
# 输入：3
# 输出："111"
# 解释：(-2) ^ 2 + (-2) ^ 1 + (-2) ^ 0 = 3
# 
# 示例 3：
# 输入：4
# 输出："100"
# 解释：(-2) ^ 2 = 4
# 
# 提示：
# 0 <= N <= 10^9

class Solution:
    def baseNeg2(self, N: int) -> str:"put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.baseNeg2('param') == 'expect', 'Case 1'
    assert unit.baseNeg2('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
