# https://leetcode-cn.com/problems/ones-and-zeroes/
# 0474.一和零
# 难度：中等
# 
# 在计算机界中，我们总是追求用有限的资源获取最大的收益。
# 现在，假设你分别支配着 m 个 0 和 n 个 1。另外，还有一个仅包含 0 和 1 字符串的数组。
# 你的任务是使用给定的 m 个 0 和 n 个 1 ，找到能拼出存在于数组中的字符串的最大数量。每个 0 和 1 至多被使用一次。
# 
# 注意：
#   - 给定 0 和 1 的数量都不会超过 100。
#   - 给定字符串数组的长度不会超过 600。
# 
# 示例 1：
# 输入: Array = {"10", "0001", "111001", "1", "0"}, m = 5, n = 3
# 输出: 4
# 
# 解释: 总共 4 个字符串可以通过 5 个 0 和 3 个 1 拼出，即 "10","0001","1","0" 。
# 
# 示例 2：
# 输入: Array = {"10", "0", "1"}, m = 1, n = 1
# 输出: 2
# 
# 解释: 你可以拼出 "10"，但之后就没有剩余数字了。更好的选择是拼出 "0" 和 "1" 。

class Solution:
    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findMaxForm('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
