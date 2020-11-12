# https://leetcode-cn.com/problems/path-crossing/
# 1496.判断路径是否相交
# 难度：容易
# 
# 给你一个字符串 path，其中 path[i] 的值可以是 &#39;N&#39;、&#39;S&#39;、&#39;E&#39; 或者 &#39;W&#39;，分别表示向北、向南、向东、向西移动一个单位。
# 
# 机器人从二维平面上的原点 (0, 0) 处开始出发，按 path 所指示的路径行走。
# 
# 如果路径在任何位置上出现相交的情况，也就是走到之前已经走过的位置，请返回 True ；否则，返回 False 。
# 
# 示例 1：
# 输入：path = "NES"
# 输出：false 
# 解释：该路径没有在任何位置相交。
# 
# 示例 2：
# 输入：path = "NESWW"
# 输出：true
# 解释：该路径经过原点两次。
# 
# 提示：
# 1 <= path.length <= 10^4
# path 仅由 {&#39;N&#39;, &#39;S&#39;, &#39;E&#39;, &#39;W} 中的字符组成


class Solution:
    def isPathCrossing(self, path: str) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isPathCrossing('param') == 'expect', 'Case 1'
    assert unit.isPathCrossing('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
