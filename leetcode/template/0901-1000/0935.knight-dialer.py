# https://leetcode-cn.com/problems/knight-dialer/
# 0935.骑士拨号器
# 难度：中等
# 
# 国际象棋中的骑士可以按下图所示进行移动：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0935-1.png)
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0935-2.png)
# 
# 这一次，我们将 “骑士” 放在电话拨号盘的任意数字键（如上图所示）上，接下来，骑士将会跳 N-1 步。每一步必须是从一个数字键跳到另一个数字键。
# 每当它落在一个键上（包括骑士的初始位置），都会拨出键所对应的数字，总共按下 N 位数字。
# 你能用这种方式拨出多少个不同的号码？
# 因为答案可能很大，所以输出答案模 10^9 + 7。
# 
# 示例 1：
# 输入：1
# 输出：10
# 
# 示例 2：
# 输入：2
# 输出：20
# 
# 示例 3：
# 输入：3
# 输出：46
# 
# 提示：
#   - 1 <= N <= 5000

class Solution:
    def knightDialer(self, N: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.knightDialer('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
