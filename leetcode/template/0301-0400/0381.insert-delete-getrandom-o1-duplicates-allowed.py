# https://leetcode-cn.com/problems/insert-delete-getrandom-o1-duplicates-allowed/
# 0381.O(1) 时间插入、删除和获取随机元素 - 允许重复
# 难度：困难
# 
# 设计一个支持在平均 时间复杂度 O(1) 下， 执行以下操作的数据结构。
# 
# 注意: 允许出现重复元素。
#   - insert(val)：向集合中插入元素 val。
#   - remove(val)：当 val 存在时，从集合中移除一个 val。
#   - getRandom：从现有集合中随机获取一个元素。每个元素被返回的概率应该与其在集合中的数量呈线性相关。
# 
# 示例：
# // 初始化一个空的集合。
# RandomizedCollection collection = new RandomizedCollection();
# 
# // 向集合中插入 1 。返回 true 表示集合不包含 1 。
# collection.insert(1);
# 
# // 向集合中插入另一个 1 。返回 false 表示集合包含 1 。集合现在包含 [1,1] 。
# collection.insert(1);
# 
# // 向集合中插入 2 ，返回 true 。集合现在包含 [1,1,2] 。
# collection.insert(2);
# 
# // getRandom 应当有 2/3 的概率返回 1 ，1/3 的概率返回 2 。
# collection.getRandom();
# 
# // 从集合中删除 1 ，返回 true 。集合现在包含 [1,2] 。
# collection.remove(1);
# 
# // getRandom 应有相同概率返回 1 和 2 。
# collection.getRandom();

class RandomizedCollection:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        

    def insert(self, val: int) -> bool:
        """
        Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
        """
        

    def remove(self, val: int) -> bool:
        """
        Removes a value from the collection. Returns true if the collection contained the specified element.
        """
        

    def getRandom(self) -> int:
        """
        Get a random element from the collection.
        """
        


# Your RandomizedCollection object will be instantiated and called as such:
# obj = RandomizedCollection()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()"put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', 'Case 1'
    assert unit.__init__('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
