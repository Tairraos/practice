# https://leetcode-cn.com/problems/reach-a-number/
# 0754.到达终点数字
# 难度：容易
# 
# 在一根无限长的数轴上，你站在0的位置。终点在target的位置。
# 每次你可以选择向左或向右移动。第 n 次移动（从 1 开始），可以走 n 步。
# 返回到达终点需要的最小移动次数。
# 
# 示例 1：
# 输入: target = 3
# 输出: 2
# 解释：
# 第一次移动，从 0 到 1 。
# 第二次移动，从 1 到 3 。
# 
# 示例 2：
# 输入: target = 2
# 输出: 3
# 解释：
# 第一次移动，从 0 到 1 。
# 第二次移动，从 1 到 -1 。
# 第三次移动，从 -1 到 2 。
# 
# 注意：
#   - target是在[-10^9, 10^9]范围中的非零整数。

class Solution:
    def reachNumber(self, target: int) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.reachNumber('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')