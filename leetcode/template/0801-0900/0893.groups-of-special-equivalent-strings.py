# https://leetcode-cn.com/problems/groups-of-special-equivalent-strings/
# 0893.特殊等价字符串组
# 难度：容易
# 
# 你将得到一个字符串数组 A。
# 如果经过任意次数的移动，S == T，那么两个字符串 S 和 T 是特殊等价的。
# 
# 一次移动包括选择两个索引 i 和 j，且 i％2 == j％2，并且交换 S[j] 和 S [i]。
# 现在规定，A 中的特殊等价字符串组是 A 的非空子集 S，这样不在 S 中的任何字符串与 S 中的任何字符串都不是特殊等价的。
# 
# 返回 A 中特殊等价字符串组的数量。
# 
# 示例 1：
# 输入：["a","b","c","a","c","c"]
# 输出：3
# 解释：3 组 ["a","a"]，["b"]，["c","c","c"]
# 
# 示例 2：
# 输入：["aa","bb","ab","ba"]
# 输出：4
# 解释：4 组 ["aa"]，["bb"]，["ab"]，["ba"]
# 
# 示例 3：
# 输入：["abc","acb","bac","bca","cab","cba"]
# 输出：3
# 解释：3 组 ["abc","cba"]，["acb","bca"]，["bac","cab"]
# 
# 示例 4：
# 输入：["abcd","cdab","adcb","cbad"]
# 输出：1
# 解释：1 组 ["abcd","cdab","adcb","cbad"]
# 
# 提示：
#   - 1 <= A.length <= 1000
#   - 1 <= A[i].length <= 20
#   - 所有 A[i] 都具有相同的长度。
#   - 所有 A[i] 都只由小写字母组成。


from typing import *


class Solution:
    def numSpecialEquivGroups(self, A: List[str]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.numSpecialEquivGroups('param') == 'expect', 'Case 1'
    assert unit.numSpecialEquivGroups('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
