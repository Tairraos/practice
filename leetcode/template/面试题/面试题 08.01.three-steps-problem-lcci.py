# https://leetcode-cn.com/problems/three-steps-problem-lcci/
# 面试题 08.01.三步问题
# 难度：容易
# 
# 三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。
# 
#  示例1:
# 
#  输入：n = 3 
#  输出：4
#  说明: 有四种走法
# 
#  示例2:
# 
#  输入：n = 5
#  输出：13
# 
#  提示:
# 
# n范围在[1, 1000000]之间


class Solution:
    def waysToStep(self, n: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.waysToStep('param') == 'expect', 'Case 1'
    assert unit.waysToStep('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
