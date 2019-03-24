/**
 * https://leetcode-cn.com/problems/shuffle-an-array/
 * 0384.打乱数组
 * 难度：中等
 * 
 * 打乱一个没有重复元素的数组。
 * 
 * 示例：
 * // 以数字集合 1, 2 和 3 初始化数组。
 * int[] nums = {1,2,3};
 * Solution solution = new Solution(nums);
 * 
 * // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
 * solution.shuffle();
 * 
 * // 重设数组到它的初始状态[1,2,3]。
 * solution.reset();
 * 
 * // 随机返回数组[1,2,3]打乱后的结果。
 * solution.shuffle();
 */

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(Solution("参数"), "期望结果");
assert.deepEqual(Solution("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
