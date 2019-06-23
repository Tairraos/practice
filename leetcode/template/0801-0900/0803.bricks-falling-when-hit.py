# https://leetcode-cn.com/problems/bricks-falling-when-hit/
# 0803.打砖块
# 难度：困难
# 
# 我们有一组包含1和0的网格；其中1表示砖块。 当且仅当一块砖直接连接到网格的顶部，或者它至少有一块相邻（4 个方向之一）砖块不会掉落时，它才不会落下。
# 我们会依次消除一些砖块。每当我们消除 (i, j) 位置时， 对应位置的砖块（若存在）会消失，然后其他的砖块可能因为这个消除而落下。
# 返回一个数组表示每次消除操作对应落下的砖块数目。
# 
# 示例 1：
# 输入：
# grid = [[1,0,0,0],[1,1,1,0]]
# hits = [[1,0]]
# 输出: [2]
# 解释：
# 如果我们消除(1, 0)位置的砖块, 在(1, 1) 和(1, 2) 的砖块会落下。所以我们应该返回2。
# 
# 示例 2：
# 输入：
# grid = [[1,0,0,0],[1,1,0,0]]
# hits = [[1,1],[1,0]]
# 输出：[0,0]
# 解释：
# 当我们消除(1, 0)的砖块时，(1, 1)的砖块已经由于上一步消除而消失了。所以每次消除操作不会造成砖块落下。注意(1, 0)砖块不会记作落下的砖块。
# 
# 注意：
#   - 网格的行数和列数的范围是[1, 200]。
#   - 消除的数字不会超过网格的区域。
#   - 可以保证每次的消除都不相同，并且位于网格的内部。
#   - 一个消除的位置可能没有砖块，如果这样的话，就不会有砖块落下。

class Solution:
    def hitBricks(self, grid: List[List[int]], hits: List[List[int]]) -> List[int]:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.hitBricks('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
