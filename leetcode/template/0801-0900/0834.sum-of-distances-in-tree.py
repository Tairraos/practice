# https://leetcode-cn.com/problems/sum-of-distances-in-tree/
# 0834.树中距离之和
# 难度：困难
# 
# 给定一个无向、连通的树。树中有 N 个标记为 0...N-1 的节点以及 N-1 条边 。
# 第 i 条边连接节点 edges[i][0] 和 edges[i][1] 。
# 返回一个表示节点 i 与其他所有节点距离之和的列表 ans。
# 
# 示例 1：
# 输入: N = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
# 输出: [8,12,6,10,10,10]
# 解释：
# 如下为给定的树的示意图：
#   0
# / \
# 1   2
#    /|\
#   3 4 5
# 
# 我们可以计算出 dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5)
# 也就是 1 + 1 + 2 + 2 + 2 = 8。 因此，answer[0] = 8，以此类推。
# 
# 说明: 1 <= N <= 10000

class Solution:
    def sumOfDistancesInTree(self, N: int, edges: List[List[int]]) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.sumOfDistancesInTree('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
