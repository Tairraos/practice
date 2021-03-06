# https://leetcode-cn.com/problems/design-hashmap/
# 0706.设计哈希映射
# 难度：容易
# 
# 不使用任何内建的哈希表库设计一个哈希映射
# 具体地说，你的设计应该包含以下的功能
#   - put(key, value)：向哈希映射中插入(键,值)的数值对。如果键对应的值已经存在，更新这个值。
#   - get(key)：返回给定的键所对应的值，如果映射中不包含这个键，返回-1。
#   - remove(key)：如果映射中存在这个键，删除这个数值对。
# 
# 示例：
# MyHashMap hashMap = new MyHashMap();
# hashMap.put(1, 1);
# hashMap.put(2, 2);
# hashMap.get(1);            // 返回 1
# hashMap.get(3);            // 返回 -1 (未找到)
# hashMap.put(2, 1);         // 更新已有的值
# hashMap.get(2);            // 返回 1
# hashMap.remove(2);         // 删除键为2的数据
# hashMap.get(2);            // 返回 -1 (未找到)
# 
# 注意：
#   - 所有的值都在 [1, 1000000]的范围内。
#   - 操作的总数目在[1, 10000]范围内。
#   - 不要使用内建的哈希库。


class MyHashMap:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        

    def put(self, key: int, value: int) -> None:
        """
        value will always be non-negative.
        """
        

    def get(self, key: int) -> int:
        """
        Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
        """
        

    def remove(self, key: int) -> None:
        """
        Removes the mapping of the specified value key if this map contains a mapping for the key
        """
        


# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', 'Case 1'
    assert unit.__init__('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
