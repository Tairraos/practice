# https://leetcode-cn.com/problems/fancy-sequence/
# 1622.奇妙序列
# 难度：困难
# 
# 请你实现三个 API append，addAll 和 multAll 来实现奇妙序列。
# 
# 请实现 Fancy 类 ：
# 
# Fancy() 初始化一个空序列对象。
# void append(val) 将整数 val 添加在序列末尾。
# void addAll(inc) 将所有序列中的现有数值都增加 inc 。
# void multAll(m) 将序列中的所有现有数值都乘以整数 m 。
# int getIndex(idx) 得到下标为 idx 处的数值（下标从 0 开始），并将结果对 109 + 7 取余。如果下标大于等于序列的长度，请返回 -1 。
# 
#  
# 
# 示例：
# 输入：
# ["Fancy", "append", "addAll", "append", "multAll", "getIndex", "addAll", "append", "multAll", "getIndex", "getIndex", "getIndex"]
# [[], [2], [3], [7], [2], [0], [3], [10], [2], [0], [1], [2]]
# 输出：
# [null, null, null, null, null, 10, null, null, null, 26, 34, 20]
# 
# 解释：
# Fancy fancy = new Fancy();
# fancy.append(2);   // 奇妙序列：[2]
# fancy.addAll(3);   // 奇妙序列：[2+3] -> [5]
# fancy.append(7);   // 奇妙序列：[5, 7]
# fancy.multAll(2);  // 奇妙序列：[5*2, 7*2] -> [10, 14]
# fancy.getIndex(0); // 返回 10
# fancy.addAll(3);   // 奇妙序列：[10+3, 14+3] -> [13, 17]
# fancy.append(10);  // 奇妙序列：[13, 17, 10]
# fancy.multAll(2);  // 奇妙序列：[13*2, 17*2, 10*2] -> [26, 34, 20]
# fancy.getIndex(0); // 返回 26
# fancy.getIndex(1); // 返回 34
# fancy.getIndex(2); // 返回 20
# 
#  
# 
# 提示：
# 1 
# 0 5
# 总共最多会有 105 次对 append，addAll，multAll 和 getIndex 的调用。


class Fancy:

    def __init__(self):


    def append(self, val: int) -> None:


    def addAll(self, inc: int) -> None:


    def multAll(self, m: int) -> None:


    def getIndex(self, idx: int) -> int:



# Your Fancy object will be instantiated and called as such:
# obj = Fancy()
# obj.append(val)
# obj.addAll(inc)
# obj.multAll(m)
# param_4 = obj.getIndex(idx)
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
