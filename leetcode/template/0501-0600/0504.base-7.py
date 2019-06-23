# https://leetcode-cn.com/problems/base-7/
# 0504.七进制数
# 难度：容易
# 
# 给定一个整数，将其转化为7进制，并以字符串形式输出。
# 
# 示例 1：
# 输入: 100
# 输出: "202"
# 
# 示例 2：
# 输入: -7
# 输出: "-10"
# 
# 注意: 输入范围是 [-1e7, 1e7] 。

class Solution:
    def convertToBase7(self, num: int) -> str:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.convertToBase7('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
