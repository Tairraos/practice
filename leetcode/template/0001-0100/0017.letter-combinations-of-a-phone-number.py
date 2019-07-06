# https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
# 0017.电话号码的字母组合
# 难度：中等
# 
# 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
# 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
# +---------+---------+---------+
# |    1    |    2    |    3    |
# |   O_O   |   abc   |   def   |
# +---------+---------+---------+
# |    4    |    5    |    6    |
# |   ghi   |   jkl   |   mno   |
# +---------+---------+---------+
# |    7    |    8    |    9    |
# |   pqrs  |   tuv   |   wxyz  |
# +---------+---------+---------+
# |    *    |    0    |    #    |
# |    +    |    _    |         |
# +---------+---------+---------+
# 
# 示例：
# 输入："23"
# 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
# 
# 说明：
# 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.letterCombinations('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
