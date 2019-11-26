# https://leetcode-cn.com/problems/split-a-string-in-balanced-strings/
# 1221.分割平衡字符串
# 难度：容易
# 
# 在一个「平衡字符串」中，&#39;L&#39; 和 &#39;R&#39; 字符的数量是相同的。
# 
# 给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。
# 
# 返回可以通过分割得到的平衡字符串的最大数量。
# 
# 示例 1：
# 输入：s = "RLRRLLRLRL"
# 输出：4
# 解释：s 可以分割为 "RL", "RRLL", "RL", "RL", 每个子字符串中都包含相同数量的 &#39;L&#39; 和 &#39;R&#39;。
# 
# 示例 2：
# 输入：s = "RLLLLRRRLR"
# 输出：3
# 解释：s 可以分割为 "RL", "LLLRRR", "LR", 每个子字符串中都包含相同数量的 &#39;L&#39; 和 &#39;R&#39;。
# 
# 示例 3：
# 输入：s = "LLLLRRRR"
# 输出：1
# 解释：s 只能保持原样 "LLLLRRRR".
# 
# 提示：
# 1 <= s.length <= 1000
# s[i] = &#39;L&#39; 或 &#39;R&#39;


class Solution:
    def balancedStringSplit(self, s: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.balancedStringSplit('param') == 'expect', 'Case 1'
    assert unit.balancedStringSplit('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
