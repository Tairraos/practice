# https://leetcode-cn.com/problems/nge-tou-zi-de-dian-shu-lcof/
# 面试题60.n个骰子的点数
# 难度：容易
# 
# 把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。
# 
# 你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。
# 
# 示例 1:
# 输入: 1
# 输出: [0.16667,0.16667,0.16667,0.16667,0.16667,0.16667]
# 
# 示例 2:
# 输入: 2
# 输出: [0.02778,0.05556,0.08333,0.11111,0.13889,0.16667,0.13889,0.11111,0.08333,0.05556,0.02778]
# 
# 限制：
# 
# 1 <= n <= 11


from typing import *


class Solution:
    def twoSum(self, n: int) -> List[float]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.twoSum('param') == 'expect', 'Case 1'
    assert unit.twoSum('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
