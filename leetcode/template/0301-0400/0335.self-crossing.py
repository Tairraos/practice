# https://leetcode-cn.com/problems/self-crossing/
# 0335.路径交叉
# 难度：困难
# 
# 给定一个含有 n 个正数的数组 x。从点 (0,0) 开始，先向北移动 x[0] 米，然后向西移动 x[1] 米，向南移动 x[2] 米，向东移动 x[3] 米，持续移动。也就是说，每次移动后你的方位会发生逆时针变化。
# 编写一个 O(1) 空间复杂度的一趟扫描算法，判断你所经过的路径是否相交。
# 
# 示例 1：
# ┌───┐
# │   │
# └───┼──>
#     │
# 
# 输入: [2,1,1,2]
# 输出: true
# 
# 示例 2：
# ┌──────┐
# │      │
# │
# │
# └────────────>
# 
# 输入: [1,2,3,4]
# 输出: false
# 
# 示例 3：
# ┌───┐
# │   │
# └───┼>
# 
# 输入: [1,1,1,1]
# 输出: true

class Solution:
    def isSelfCrossing(self, x: List[int]) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isSelfCrossing('param') == 'expect', 'Case 1'
    assert unit.isSelfCrossing('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
