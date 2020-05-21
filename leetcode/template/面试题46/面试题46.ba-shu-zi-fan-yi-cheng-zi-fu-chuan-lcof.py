# https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
# 面试题46.把数字翻译成字符串
# 难度：中等
# 
# 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 &ldquo;a&rdquo; ，1 翻译成 &ldquo;b&rdquo;，&hellip;&hellip;，11 翻译成 &ldquo;l&rdquo;，&hellip;&hellip;，25 翻译成 &ldquo;z&rdquo;。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
# 
# 示例 1:
# 输入: 12258
# 输出: 5
# 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
# 
# 提示：
# 0 <= num < 231


class Solution:
    def translateNum(self, num: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.translateNum('param') == 'expect', 'Case 1'
    assert unit.translateNum('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
