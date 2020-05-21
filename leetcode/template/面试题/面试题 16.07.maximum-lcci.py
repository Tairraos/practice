# https://leetcode-cn.com/problems/maximum-lcci/
# 面试题 16.07.最大数值
# 难度：容易
# 
# 编写一个方法，找出两个数字a和b中最大的那一个。不得使用if-else或其他比较运算符。
# 示例：
# 输入： a = 1, b = 2
# 输出： 2


class Solution:
    def maximum(self, a: int, b: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maximum('param') == 'expect', 'Case 1'
    assert unit.maximum('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
