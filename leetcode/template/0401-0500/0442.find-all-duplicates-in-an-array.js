/**
 * https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/
 * 0442.数组中重复的数据
 * 难度：中等
 * 
 * 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。
 * 找到所有出现两次的元素。
 * 你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？
 * 
 * 示例：
 * 输入：
 * [4,3,2,7,8,2,3,1]
 * 
 * 输出：
 * [2,3]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findDuplicates("param"), "expect", "Case 1");
assert.deepEqual(findDuplicates("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
