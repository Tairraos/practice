# https://leetcode-cn.com/problems/map-sum-pairs/
# 0677.键值映射
# 难度：中等
# 
# 实现一个 MapSum 类里的两个方法，insert 和 sum。
# 对于方法 insert，你将得到一对（字符串，整数）的键值对。字符串表示键，整数表示值。如果键已经存在，那么原来的键值对将被替代成新的键值对。
# 对于方法 sum，你将得到一个表示前缀的字符串，你需要返回所有以该前缀开头的键的值的总和。
# 
# 示例 1：
# 输入: insert("apple", 3), 输出: Null
# 输入: sum("ap"), 输出: 3
# 输入: insert("app", 2), 输出: Null
# 输入: sum("ap"), 输出: 5

class MapSum:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        

    def insert(self, key: str, val: int) -> None:
        

    def sum(self, prefix: str) -> int:
        


# Your MapSum object will be instantiated and called as such:
# obj = MapSum()
# obj.insert(key,val)
# param_2 = obj.sum(prefix)

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
