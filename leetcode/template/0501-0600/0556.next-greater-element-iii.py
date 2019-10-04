# https://leetcode-cn.com/problems/next-greater-element-iii/
# 0556.下一个更大元素 III
# 难度：中等
# 
# 给定一个32位正整数 n，你需要找到最小的32位整数，其与 n 中存在的位数完全相同，并且其值大于n。如果不存在这样的32位整数，则返回-1。
# 
# 示例 1：
# 输入: 12
# 输出: 21
# 
# 示例 2：
# 输入: 21
# 输出: -1


class Solution:
    def nextGreaterElement(self, n: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.nextGreaterElement('param') == 'expect', 'Case 1'
    assert unit.nextGreaterElement('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
