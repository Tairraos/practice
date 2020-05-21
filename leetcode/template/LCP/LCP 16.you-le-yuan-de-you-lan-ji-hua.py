# https://leetcode-cn.com/problems/you-le-yuan-de-you-lan-ji-hua/
# LCP 16.游乐园的游览计划
# 难度：困难
# 
# 又到了一年一度的春游时间，小吴计划去游乐场游玩 1 天，游乐场总共有 N 个游乐项目，编号从 0 到 N-1。小吴给每个游乐项目定义了一个非负整数值 value[i] 表示自己的喜爱值。两个游乐项目之间会有双向路径相连，整个游乐场总共有 M 条双向路径，保存在二维数组 edges中。 小吴计划选择一个游乐项目 A 作为这一天游玩的重点项目。上午小吴准备游玩重点项目 A 以及与项目 A 相邻的两个项目 B、C （项目A、B与C要求是不同的项目，且项目B与项目C要求相邻），并返回 A ，即存在一条 A-B-C-A 的路径。 下午，小吴决定再游玩重点项目 A以及与A相邻的两个项目 B&#39;、C&#39;，（项目A、B&#39;与C&#39;要求是不同的项目，且项目B&#39;与项目C&#39;要求相邻），并返回 A ，即存在一条 A-B&#39;-C&#39;-A 的路径。下午游玩项目 B&#39;、C&#39; 可与上午游玩项目B、C存在重复项目。 小吴希望提前安排好游玩路径，使得喜爱值之和最大。请你返回满足游玩路径选取条件的最大喜爱值之和，如果没有这样的路径，返回 0。 注意：一天中重复游玩同一个项目并不能重复增加喜爱值了。例如：上下午游玩路径分别是 A-B-C-A与A-C-D-A 那么只能获得 value[A] + value[B] + value[C] + value[D] 的总和。
# 
# 示例 1：
# 输入：edges = [[0,1],[1,2],[0,2]], value = [1,2,3]
# 
# 输出：6
# 
# 解释：喜爱值之和最高的方案之一是 0->1->2->0 与 0->2->1->0 。重复游玩同一点不重复计入喜爱值，返回1+2+3=6
# 
# 示例 2：
# 输入：edges = [[0,2],[2,1]], value = [1,2,5]
# 
# 输出：0
# 
# 解释：无满足要求的游玩路径，返回 0
# 
# 示例 3：
# 输入：edges = [[0,1],[0,2],[0,3],[0,4],[0,5],[1,3],[2,4],[2,5],[3,4],[3,5],[4,5]], value = [7,8,6,8,9,7]
# 
# 输出：39
# 
# 解释：喜爱值之和最高的方案之一是 3->0->1->3 与 3->4->5->3 。喜爱值最高为 7+8+8+9+7=39
# 
# 限制：
# 
# 3 <= value.length <= 10000
# 1 <= edges.length <= 10000
# 0 <= edges[i][0],edges[i][1] < value.length
# 0 <= value[i] <= 10000
# edges中没有重复的边
# edges[i][0] != edges[i][1]


from typing import *


class Solution:
    def maxWeight(self, edges: List[List[int]], value: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maxWeight('param') == 'expect', 'Case 1'
    assert unit.maxWeight('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
