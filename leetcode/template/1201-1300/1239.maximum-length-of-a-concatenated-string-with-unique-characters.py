# https://leetcode-cn.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
# 1239.串联字符串的最大长度
# 难度：中等
# 
# 给定一个字符串数组 arr，字符串 s 是将 arr 某一子序列字符串连接所得的字符串，如果 s 中的每一个字符都只出现过一次，那么它就是一个可行解。
# 
# 请返回所有可行解 s 中最长长度。
# 
# 示例 1：
# 输入：arr = ["un","iq","ue"]
# 输出：4
# 解释：所有可能的串联组合是 "","un","iq","ue","uniq" 和 "ique"，最大长度为 4。
# 
# 示例 2：
# 输入：arr = ["cha","r","act","ers"]
# 输出：6
# 解释：可能的解答有 "chaers" 和 "acters"。
# 
# 示例 3：
# 输入：arr = ["abcdefghijklmnopqrstuvwxyz"]
# 输出：26
# 
# 提示：
# 1 <= arr.length <= 16
# 1 <= arr[i].length <= 26
# arr[i] 中只含有小写英文字母


from typing import *


class Solution:
    def maxLength(self, arr: List[str]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maxLength('param') == 'expect', 'Case 1'
    assert unit.maxLength('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
