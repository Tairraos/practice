# https://leetcode-cn.com/problems/decode-ways/
# 0091.解码方法
# 难度：中等
# 
# 一条包含字母 A-Z 的消息通过以下方式进行了编码：
# 'A' -> 1
# 'B' -> 2
# ...
# 'Z' -> 26
# 
# 给定一个只包含数字的非空字符串，请计算解码方法的总数。
# 
# 示例 1：
# 输入: "12"
# 输出: 2
# 解释: 它可以解码为 "AB"（1 2）或者 "L"（12）。
# 
# 示例 2：
# 输入: "226"
# 输出: 3
# 解释: 它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。


class Solution:
    def numDecodings(self, s: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.numDecodings('param') == 'expect', 'Case 1'
    assert unit.numDecodings('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
