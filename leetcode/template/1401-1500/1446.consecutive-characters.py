# https://leetcode-cn.com/problems/consecutive-characters/
# 1446.连续字符
# 难度：容易
# 
# 给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。
# 
# 请你返回字符串的能量。
# 
# 示例 1：
# 输入：s = "leetcode"
# 输出：2
# 解释：子字符串 "ee" 长度为 2 ，只包含字符 &#39;e&#39; 。
# 
# 示例 2：
# 输入：s = "abbcccddddeeeeedcba"
# 输出：5
# 解释：子字符串 "eeeee" 长度为 5 ，只包含字符 &#39;e&#39; 。
# 
# 示例 3：
# 输入：s = "triplepillooooow"
# 输出：5
# 
# 示例 4：
# 输入：s = "hooraaaaaaaaaaay"
# 输出：11
# 
# 示例 5：
# 输入：s = "tourist"
# 输出：1
# 
# 提示：
# 1 <= s.length <= 500
# s 只包含小写英文字母。


class Solution:
    def maxPower(self, s: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maxPower('param') == 'expect', 'Case 1'
    assert unit.maxPower('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
