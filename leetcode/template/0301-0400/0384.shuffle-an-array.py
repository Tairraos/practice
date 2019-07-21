# https://leetcode-cn.com/problems/shuffle-an-array/
# 0384.打乱数组
# 难度：中等
# 
# 打乱一个没有重复元素的数组。
# 
# 示例：
# // 以数字集合 1, 2 和 3 初始化数组。
# int[] nums = {1,2,3};
# Solution solution = new Solution(nums);
# 
# // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
# solution.shuffle();
# 
# // 重设数组到它的初始状态[1,2,3]。
# solution.reset();
# 
# // 随机返回数组[1,2,3]打乱后的结果。
# solution.shuffle();

class Solution:

    def __init__(self, nums: List[int]):
        

    def reset(self) -> List[int]:
        """
        Resets the array to its original configuration and return it.
        """
        

    def shuffle(self) -> List[int]:
        """
        Returns a random shuffling of the array.
        """
        


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()"put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', 'Case 1'
    assert unit.__init__('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
