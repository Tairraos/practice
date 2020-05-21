# https://leetcode-cn.com/problems/minimum-distance-to-type-a-word-using-two-fingers/
# 1320.二指输入的的最小距离
# 难度：困难
# 
# 二指输入法定制键盘在 XY 平面上的布局如上图所示，其中每个大写英文字母都位于某个坐标处，例如字母 A 位于坐标 (0,0)，字母 B 位于坐标 (0,1)，字母 P 位于坐标 (2,3) 且字母 Z 位于坐标 (4,1)。
# 
# 给你一个待输入字符串 word，请你计算并返回在仅使用两根手指的情况下，键入该字符串需要的最小移动总距离。坐标 (x1,y1) 和 (x2,y2) 之间的距离是 |x1 - x2| + |y1 - y2|。 
# 
# 注意，两根手指的起始位置是零代价的，不计入移动总距离。你的两根手指的起始位置也不必从首字母或者前两个字母开始。
# 
# 示例 1：
# 输入：word = "CAKE"
# 输出：3
# 解释： 
# 使用两根手指输入 "CAKE" 的最佳方案之一是： 
# 手指 1 在字母 &#39;C&#39; 上 -> 移动距离 = 0 
# 手指 1 在字母 &#39;A&#39; 上 -> 移动距离 = 从字母 &#39;C&#39; 到字母 &#39;A&#39; 的距离 = 2 
# 手指 2 在字母 &#39;K&#39; 上 -> 移动距离 = 0 
# 手指 2 在字母 &#39;E&#39; 上 -> 移动距离 = 从字母 &#39;K&#39; 到字母 &#39;E&#39; 的距离  = 1 
# 总距离 = 3
# 
# 示例 2：
# 输入：word = "HAPPY"
# 输出：6
# 解释： 
# 使用两根手指输入 "HAPPY" 的最佳方案之一是：
# 手指 1 在字母 &#39;H&#39; 上 -> 移动距离 = 0
# 手指 1 在字母 &#39;A&#39; 上 -> 移动距离 = 从字母 &#39;H&#39; 到字母 &#39;A&#39; 的距离 = 2
# 手指 2 在字母 &#39;P&#39; 上 -> 移动距离 = 0
# 手指 2 在字母 &#39;P&#39; 上 -> 移动距离 = 从字母 &#39;P&#39; 到字母 &#39;P&#39; 的距离 = 0
# 手指 1 在字母 &#39;Y&#39; 上 -> 移动距离 = 从字母 &#39;A&#39; 到字母 &#39;Y&#39; 的距离 = 4
# 总距离 = 6
# 
# 示例 3：
# 输入：word = "NEW"
# 输出：3
# 
# 示例 4：
# 输入：word = "YEAR"
# 输出：7
# 
# 提示：
# 2 <= word.length <= 300
# 每个 word[i] 都是一个大写英文字母。
# 
# 


class Solution:
    def minimumDistance(self, word: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.minimumDistance('param') == 'expect', 'Case 1'
    assert unit.minimumDistance('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')