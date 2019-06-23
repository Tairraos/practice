# https://leetcode-cn.com/problems/advantage-shuffle/
# 0870.优势洗牌
# 难度：中等
# 
# 给定两个大小相等的数组 A 和 B，A 相对于 B 的优势可以用满足 A[i] > B[i] 的索引 i 的数目来描述。
# 返回 A 的任意排列，使其相对于 B 的优势最大化。
# 
# 示例 1：
# 输入：A = [2,7,11,15], B = [1,10,4,11]
# 输出：[2,11,7,15]
# 
# 示例 2：
# 输入：A = [12,24,8,32], B = [13,25,32,11]
# 输出：[24,32,8,12]
# 
# 提示：
#   - 1 <= A.length = B.length <= 10000
#   - 0 <= A[i] <= 10^9
#   - 0 <= B[i] <= 10^9

class Solution:
    def advantageCount(self, A: List[int], B: List[int]) -> List[int]:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.advantageCount('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
