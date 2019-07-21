# https://leetcode-cn.com/problems/reorder-log-files/
# 0937.重新排列日志文件
# 难度：容易
# 
# 你有一个日志数组 logs。每条日志都是以空格分隔的字串。
# 对于每条日志，其第一个字为字母数字标识符。然后，要么：
#   - 标识符后面的每个字将仅由小写字母组成，或；
#   - 标识符后面的每个字将仅由数字组成。
# 
# 我们将这两种日志分别称为字母日志和数字日志。保证每个日志在其标识符后面至少有一个字。
# 将日志重新排序，使得所有字母日志都排在数字日志之前。字母日志按字母顺序排序，忽略标识符，标识符仅用于表示关系。数字日志应该按原来的顺序排列。
# 返回日志的最终顺序。
# 
# 示例 ：
# 输入：["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
# 输出：["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
# 
# 提示：
#   - 0 <= logs.length <= 100
#   - 3 <= logs[i].length <= 100
#   - logs[i] 保证有一个标识符，并且标识符后面有一个字。

class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.reorderLogFiles('param') == 'expect', 'Case 1'
    assert unit.reorderLogFiles('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
