# https://leetcode-cn.com/problems/restore-ip-addresses/
# 0093.复原IP地址
# 难度：中等
# 
# 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
# 
# 示例：
# 输入: "25525511135"
# 输出: ["255.255.11.135", "255.255.111.35"]


from typing import *


class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.restoreIpAddresses('param') == 'expect', 'Case 1'
    assert unit.restoreIpAddresses('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
