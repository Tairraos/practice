# https://leetcode-cn.com/problems/maximum-product-of-three-numbers/
# 0628.三个数的最大乘积
# 难度：容易
# 
# 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
# 
# 示例 1：
# 输入: [1,2,3]
# 输出: 6
# 
# 示例 2：
# 输入: [1,2,3,4]
# 输出: 24
# 
# 注意：
#   - 给定的整型数组长度范围是[3,10^4]，数组中所有的元素范围是[-1000, 1000]。
#   - 输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。

class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maximumProduct('param') == 'expect', 'Case 1'
    assert unit.maximumProduct('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
