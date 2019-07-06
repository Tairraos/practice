# https://leetcode-cn.com/problems/preimage-size-of-factorial-zeroes-function/
# 0793.阶乘函数后K个零
# 难度：困难
# 
# f(x) 是 x! 末尾是0的数量。（回想一下 x! = 1 * 2 * 3 * ... * x，且0! = 1）
# 
# 例如， f(3) = 0 ，因为3! = 6的末尾没有0；而 f(11) = 2 ，因为11!= 39916800末端有2个0。给定 K，找出多少个非负整数x ，有 f(x) = K 的性质。
# 
# 示例 1：
# 输入:K = 0
# 输出:5
# 解释: 0!, 1!, 2!, 3!, and 4! 均符合 K = 0 的条件。
# 
# 示例 2：
# 输入:K = 5
# 输出:0
# 解释:没有匹配到这样的 x!，符合K = 5 的条件。
# 
# 注意：
#   - K是范围在 [0, 10^9] 的整数。

class Solution:
    def preimageSizeFZF(self, K: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.preimageSizeFZF('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
