# https://leetcode-cn.com/problems/find-common-characters/
# 1002.查找常用字符
# 难度：容易
# 
# 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
# 你可以按任意顺序返回答案。
# 
# 示例 1：
# 输入：["bella","label","roller"]
# 输出：["e","l","l"]
# 
# 示例 2：
# 输入：["cool","lock","cook"]
# 输出：["c","o"]
# 
# 提示：
#   - 1 <= A.length <= 100
#   - 1 <= A[i].length <= 100
#   - A[i][j] 是小写字母

class Solution:
    def commonChars(self, A: List[str]) -> List[str]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.commonChars('param') == 'expect', 'Case 1'
    assert unit.commonChars('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
