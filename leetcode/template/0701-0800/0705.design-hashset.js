/**
 * https://leetcode-cn.com/problems/design-hashset/
 * 0705.设计哈希集合
 * 难度：容易
 * 
 * 不使用任何内建的哈希表库设计一个哈希集合
 * 具体地说，你的设计应该包含以下的功能
 *   - add(value)：向哈希集合中插入一个值。
 *   - contains(value) ：返回哈希集合中是否存在这个值。
 *   - remove(value)：将给定值从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。
 * 
 * 示例：
 * MyHashSet hashSet = new MyHashSet();
 * hashSet.add(1);
 * hashSet.add(2);
 * hashSet.contains(1);    // 返回 true
 * hashSet.contains(3);    // 返回 false (未找到)
 * hashSet.add(2);
 * hashSet.contains(2);    // 返回 true
 * hashSet.remove(2);
 * hashSet.contains(2);    // 返回  false (已经被删除)
 * 
 * 注意：
 *   - 所有的值都在 [1, 1000000]的范围内。
 *   - 操作的总数目在[1, 10000]范围内。
 *   - 不要使用内建的哈希集合库。
 */

/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(MyHashSet("param"), "expect", "caseName");
assert.deepEqual(MyHashSet("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
