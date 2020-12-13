# https://leetcode-cn.com/problems/ccw6C7/
# LCP 22.黑白方格画
# 难度：容易
# 
# 小扣注意到秋日市集上有一个创作黑白方格画的摊位。摊主给每个顾客提供一个固定在墙上的白色画板，画板不能转动。画板上有 `n * n` 的网格。绘画规则为，小扣可以选择任意多行以及任意多列的格子涂成黑色，所选行数、列数均可为 0。
# 
# 小扣希望最终的成品上需要有 `k` 个黑色格子，请返回小扣共有多少种涂色方案。
# 
# 注意：两个方案中任意一个相同位置的格子颜色不同，就视为不同的方案。
# 
# **示例 1：**
# >输入：`n = 2, k = 2`
# >
# >输出：`4`
# > 
# >解释：一共有四种不同的方案：
# >第一种方案：涂第一列；
# >第二种方案：涂第二列；
# >第三种方案：涂第一行；
# >第四种方案：涂第二行。
# 
# **示例 2：**
# >输入：`n = 2, k = 1`
# > 
# >输出：`0`
# > 
# >解释：不可行，因为第一次涂色至少会涂两个黑格。
# 
# **示例 3：**
# >输入：`n = 2, k = 4`
# > 
# >输出：`1`
# >
# >解释：共有 2*2=4 个格子，仅有一种涂色方案。
# 
# **限制：**
# - `1 <= n <= 6`
# - `0 <= k <= n * n`


class Solution:
    def paintingPlan(self, n: int, k: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.paintingPlan('param') == 'expect', 'Case 1'
    assert unit.paintingPlan('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')