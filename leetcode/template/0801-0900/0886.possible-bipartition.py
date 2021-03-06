# https://leetcode-cn.com/problems/possible-bipartition/
# 0886.可能的二分法
# 难度：中等
# 
# 给定一组 N 人（编号为 1, 2, ..., N）， 我们想把每个人分进任意大小的两组。
# 每个人都可能不喜欢其他人，那么他们不应该属于同一组。
# 形式上，如果 dislikes[i] = [a, b]，表示不允许将编号为 a 和 b 的人归入同一组。
# 当可以用这种方法将每个人分进两组时，返回 true；否则返回 false。
# 
# 示例 1：
# 输入：N = 4, dislikes = [[1,2],[1,3],[2,4]]
# 输出：true
# 解释：group1 [1,4], group2 [2,3]
# 
# 示例 2：
# 输入：N = 3, dislikes = [[1,2],[1,3],[2,3]]
# 输出：false
# 
# 示例 3：
# 输入：N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
# 输出：false
# 
# 提示：
#   - 1 <= N <= 2000
#   - 0 <= dislikes.length <= 10000
#   - 1 <= dislikes[i][j] <= N
#   - dislikes[i][0] < dislikes[i][1]
#   - 对于 dislikes[i] == dislikes[j] 不存在 i != j


from typing import *


class Solution:
    def possibleBipartition(self, N: int, dislikes: List[List[int]]) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.possibleBipartition('param') == 'expect', 'Case 1'
    assert unit.possibleBipartition('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
