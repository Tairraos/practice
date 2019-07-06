# https://leetcode-cn.com/problems/valid-boomerang/
# 1037.有效的回旋镖
# 难度：容易
# 
# 回旋镖定义为一组三个点，这些点各不相同且不在一条直线上。
# 
# 给出平面上三个点组成的列表，判断这些点是否可以构成回旋镖。
# 
# 示例 1：
# 输入：[[1,1],[2,3],[3,2]]
# 输出：true
# 
# 示例 2：
# 输入：[[1,1],[2,2],[3,3]]
# 输出：false
# 
# 提示：
# points.length == 3
# points[i].length == 2
# 0 <= points[i][j] <= 100

class Solution:
    def isBoomerang(self, points: List[List[int]]) -> bool:"put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isBoomerang('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
