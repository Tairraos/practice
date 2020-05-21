# https://leetcode-cn.com/problems/t9-lcci/
# 面试题 16.20.T9键盘
# 难度：中等
# 
# 在老式手机上，用户通过数字键盘输入，手机将提供与这些数字相匹配的单词列表。每个数字映射到0至4个字母。给定一个数字序列，实现一个算法来返回匹配单词的列表。你会得到一张含有有效单词的列表。映射如下图所示：
# 
# 示例 1:
# 输入: num = "8733", words = ["tree", "used"]
# 输出: ["tree", "used"]
# 
# 示例 2:
# 输入: num = "2", words = ["a", "b", "c", "d"]
# 输出: ["a", "b", "c"]
# 
# 提示：
# num.length <= 1000
# words.length <= 500
# words[i].length == num.length
# num中不会出现 0, 1 这两个数字


from typing import *


class Solution:
    def getValidT9Words(self, num: str, words: List[str]) -> List[str]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.getValidT9Words('param') == 'expect', 'Case 1'
    assert unit.getValidT9Words('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
