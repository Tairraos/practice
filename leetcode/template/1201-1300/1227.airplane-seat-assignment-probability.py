# https://leetcode-cn.com/problems/airplane-seat-assignment-probability/
# 1227.飞机座位分配概率
# 难度：中等
# 
# 有 n 位乘客即将登机，飞机正好有 n 个座位。第一位乘客的票丢了，他随便选了一个座位坐下。
# 
# 剩下的乘客将会：
# 
# 如果他们自己的座位还空着，就坐到自己的座位上，
# 
# 当他们自己的座位被占用时，随机选择其他座位
# 
# 第 n 位乘客坐在自己的座位上的概率是多少？
# 
# 示例 1：
# 输入：n = 1
# 输出：1.00000
# 解释：第一个人只会坐在自己的位置上。
# 
# 示例 2：
# 输入: n = 2
# 输出: 0.50000
# 解释：在第一个人选好座位坐下后，第二个人坐在自己的座位上的概率是 0.5。
# 
# 提示：
# 1 <= n <= 10^5


class Solution:
    def nthPersonGetsNthSeat(self, n: int) -> float:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.nthPersonGetsNthSeat('param') == 'expect', 'Case 1'
    assert unit.nthPersonGetsNthSeat('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')