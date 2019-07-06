# https://leetcode-cn.com/problems/add-binary/
# 0067.二进制求和
# 难度：容易
# 
# 给定两个二进制字符串，返回他们的和（用二进制表示）。
# 输入为非空字符串且只包含数字 1 和 0。
# 
# 示例 1：
# 输入: a = "11", b = "1"
# 输出: "100"
# 
# 示例 2：
# 输入: a = "1010", b = "1011"
# 输出: "10101"

class Solution:
    def addBinary(self, a: str, b: str) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.addBinary('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
