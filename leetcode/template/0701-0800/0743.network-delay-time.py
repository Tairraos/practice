# https://leetcode-cn.com/problems/network-delay-time/
# 0743.网络延迟时间
# 难度：中等
# 
# 有 N 个网络节点，标记为 1 到 N。
# 给定一个列表 times，表示信号经过有向边的传递时间。 times[i] = (u, v, w)，其中 u 是源节点，v 是目标节点， w 是一个信号从源节点传递到目标节点的时间。
# 现在，我们向当前的节点 K 发送了一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1。
# 
# 注意：
#   - N 的范围在 [1, 100] 之间。
#   - K 的范围在 [1, N] 之间。
#   - times 的长度在 [1, 6000] 之间。
#   - 所有的边 times[i] = (u, v, w) 都有 1 <= u, v <= N 且 0 <= w <= 100。

class Solution:
    def networkDelayTime(self, times: List[List[int]], N: int, K: int) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.networkDelayTime('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')