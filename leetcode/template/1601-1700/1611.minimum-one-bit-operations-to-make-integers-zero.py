# https://leetcode-cn.com/problems/minimum-one-bit-operations-to-make-integers-zero/
# 1611.使整数变为 0 的最少操作次数
# 难度：困难
# 
# 给你一个整数 n，你需要重复执行多次下述操作将其转换为 0 ：
# 
# 翻转 n 的二进制表示中最右侧位（第 0 位）。
# 如果第 (i-1) 位为 1 且从第 (i-2) 位到第 0 位都为 0，则翻转 n 的二进制表示中的第 i 位。
# 
# 返回将 n 转换为 0 的最小操作次数。
# 
#  
# 
# 示例 1：
# 输入：n = 0
# 输出：0
# 
# 示例 2：
# 输入：n = 3
# 输出：2
# 解释：3 的二进制表示为 "11"
# "11" -> "01" ，执行的是第 2 种操作，因为第 0 位为 1 。
# "01" -> "00" ，执行的是第 1 种操作。
# 
# 示例 3：
# 输入：n = 6
# 输出：4
# 解释：6 的二进制表示为 "110".
# "110" -> "010" ，执行的是第 2 种操作，因为第 1 位为 1 ，第 0 到 0 位为 0 。
# "010" -> "011" ，执行的是第 1 种操作。
# "011" -> "001" ，执行的是第 2 种操作，因为第 0 位为 1 。
# "001" -> "000" ，执行的是第 1 种操作。
# 
# 示例 4：
# 输入：n = 9
# 输出：14
# 
# 示例 5：
# 输入：n = 333
# 输出：393
# 
#  
# 
# 提示：
# 0 9


class Solution:
    def minimumOneBitOperations(self, n: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.minimumOneBitOperations('param') == 'expect', 'Case 1'
    assert unit.minimumOneBitOperations('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')