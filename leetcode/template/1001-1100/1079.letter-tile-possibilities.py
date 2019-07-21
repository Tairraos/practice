# https://leetcode-cn.com/problems/letter-tile-possibilities/
# 1079.活字印刷
# 难度：中等
# 
# 你有一套活字字模 tiles，其中每个字模上都刻有一个字母 tiles[i]。返回你可以印出的非空字母序列的数目。
# 
# 示例 1：
# 输入："AAB"
# 输出：8
# 解释：可能的序列为 "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"。
# 
# 示例 2：
# 输入："AAABBC"
# 输出：188
# 
# 提示：
# 1 <= tiles.length <= 7
# tiles 由大写英文字母组成

class Solution:
    def numTilePossibilities(self, tiles: str) -> int:"put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.numTilePossibilities('param') == 'expect', 'Case 1'
    assert unit.numTilePossibilities('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
