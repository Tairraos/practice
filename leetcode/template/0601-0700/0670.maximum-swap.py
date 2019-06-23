# https://leetcode-cn.com/problems/maximum-swap/
# 0670.最大交换
# 难度：中等
# 
# 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。
# 
# 示例 1：
# 输入: 2736
# 输出: 7236
# 解释: 交换数字2和数字7。
# 
# 示例 2：
# 输入: 9973
# 输出: 9973
# 解释: 不需要交换。
# 
# 注意：
#   - 给定数字的范围是 [0, 10^8]

class Solution:
    def maximumSwap(self, num: int) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maximumSwap('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
