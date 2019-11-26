# https://leetcode-cn.com/problems/sort-items-by-groups-respecting-dependencies/
# 1203.项目管理
# 难度：困难
# 
# 公司共有 n 个项目和  m 个小组，每个项目要不没有归属，要不就由其中的一个小组负责。
# 
# 我们用 group[i] 代表第 i 个项目所属的小组，如果这个项目目前无人接手，那么 group[i] 就等于 -1。（项目和小组都是从零开始编号的）
# 
# 请你帮忙按要求安排这些项目的进度，并返回排序后的项目列表：
# 
# 同一小组的项目，排序后在列表中彼此相邻。
# 项目之间存在一定的依赖关系，我们用一个列表 beforeItems 来表示，其中 beforeItems[i] 表示在进行第 i 个项目前（位于第 i 个项目左侧）应该完成的所有项目。
# 
# 结果要求：
# 
# 如果存在多个解决方案，只需要返回其中任意一个即可。
# 
# 如果没有合适的解决方案，就请返回一个 空列表。
# 
# 示例 1：
# 输入：n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]
# 输出：[6,3,4,1,5,2,0,7]
# 
# 示例 2：
# 输入：n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3],[],[4],[]]
# 输出：[]
# 解释：与示例 1 大致相同，但是在排序后的列表中，4 必须放在 6 的前面。
# 
# 提示：
# 1 <= m <= n <= 3*10^4
# group.length == beforeItems.length == n
# -1 <= group[i] <= m-1
# 0 <= beforeItems[i].length <= n-1
# 0 <= beforeItems[i][j] <= n-1
# i != beforeItems[i][j]


from typing import *


class Solution:
    def sortItems(self, n: int, m: int, group: List[int], beforeItems: List[List[int]]) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.sortItems('param') == 'expect', 'Case 1'
    assert unit.sortItems('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
