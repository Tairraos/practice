# https://leetcode-cn.com/problems/number-of-music-playlists/
# 0920.播放列表的数量
# 难度：困难
# 
# 你的音乐播放器里有 N 首不同的歌，在旅途中，你的旅伴想要听 L 首歌（不一定不同，即，允许歌曲重复）。请你为她按如下规则创建一个播放列表：
#   - 每首歌至少播放一次。
#   - 一首歌只有在其他 K 首歌播放完之后才能再次播放。
# 
# 返回可以满足要求的播放列表的数量。由于答案可能非常大，请返回它模 10^9 + 7 的结果。
# 
# 示例 1：
# 输入：N = 3, L = 3, K = 1
# 输出：6
# 解释：有 6 种可能的播放列表。[1, 2, 3]，[1, 3, 2]，[2, 1, 3]，[2, 3, 1]，[3, 1, 2]，[3, 2, 1].
# 
# 示例 2：
# 输入：N = 2, L = 3, K = 0
# 输出：6
# 解释：有 6 种可能的播放列表。[1, 1, 2]，[1, 2, 1]，[2, 1, 1]，[2, 2, 1]，[2, 1, 2]，[1, 2, 2]
# 
# 示例 3：
# 输入：N = 2, L = 3, K = 1
# 输出：2
# 解释：有 2 种可能的播放列表。[1, 2, 1]，[2, 1, 2]
# 
# 提示：
#   - 0 <= K < N <= L <= 100

class Solution:
    def numMusicPlaylists(self, N: int, L: int, K: int) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.numMusicPlaylists('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')