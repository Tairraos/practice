# https://leetcode-cn.com/problems/pascals-triangle-ii/
# 0119.杨辉三角 II
# 难度：容易
# 
# 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0118.gif)
# 在杨辉三角中，每个数是它左上方和右上方的数的和。
# 
# 示例：
# 输入: 3
# 输出: [1,3,3,1]
# 
# 进阶：
# 你可以优化你的算法到 O(k) 空间复杂度吗？

class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.getRow('param') == 'expect', 'Case 1'
    assert unit.getRow('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
