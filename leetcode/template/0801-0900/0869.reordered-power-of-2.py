# https://leetcode-cn.com/problems/reordered-power-of-2/
# 0869.重新排序得到 2 的幂
# 难度：中等
# 
# 从正整数 N 开始，我们按任何顺序（包括原始顺序）将数字重新排序，注意其前导数字不能为零。
# 如果我们可以通过上述方式得到 2 的幂，返回 true；否则，返回 false。
# 
# 示例 1：
# 输入：1
# 输出：true
# 
# 示例 2：
# 输入：10
# 输出：false
# 
# 示例 3：
# 输入：16
# 输出：true
# 
# 示例 4：
# 输入：24
# 输出：false
# 
# 示例 5：
# 输入：46
# 输出：true
# 
# 提示：
#   - 1 <= N <= 10^9

class Solution:
    def reorderedPowerOf2(self, N: int) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.reorderedPowerOf2('param') == 'expect', 'Case 1'
    assert unit.reorderedPowerOf2('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
