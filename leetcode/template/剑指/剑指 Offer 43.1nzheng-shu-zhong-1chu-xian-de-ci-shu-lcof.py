# https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/
# 剑指 Offer 43.1～n 整数中 1 出现的次数
# 难度：困难
# 
# 输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。
# 
# 例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。
# 
#  
# 
# 示例 1：
# 输入：n = 12
# 输出：5
# 
# 示例 2：
# 输入：n = 13
# 输出：6
# 
#  
# 
# 限制：
# 
# 1 
# 
# 注意：本题与主站 233 题相同：https://leetcode-cn.com/problems/number-of-digit-one/


class Solution:
    def countDigitOne(self, n: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.countDigitOne('param') == 'expect', 'Case 1'
    assert unit.countDigitOne('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
