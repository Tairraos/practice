# https://leetcode-cn.com/problems/power-of-three/
# 0326.3的幂
# 难度：容易
# 
# 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
# 
# 示例 1：
# 输入: 27
# 输出: true
# 
# 示例 2：
# 输入: 0
# 输出: false
# 
# 示例 3：
# 输入: 9
# 输出: true
# 
# 示例 4：
# 输入: 45
# 输出: false
# 
# 进阶：
# 你能不使用循环或者递归来完成本题吗？

class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isPowerOfThree('param') == 'expect', 'Case 1'
    assert unit.isPowerOfThree('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
