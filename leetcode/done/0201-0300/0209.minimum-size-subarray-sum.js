/**
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/
 * 0209.长度最小的子数组
 * 难度：中等
 * 
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。
 * 
 * 示例：
 * 输入: s = 7, nums = [2,3,1,2,4,3]
 * 输出: 2
 * 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
 * 
 * 进阶：
 * 如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
 */

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let sum = 0, start = 0, result = nums.length + 1; //初始结果为数组长度 + 1，如果遍历完未改变说明没长到答案
    return nums.some((v, i) => { //start 为子数组起始指针，i为当前扫描指针，i - start + 1 就是当前子数组长度
        if (v >= s) return true; //如果某元素>=s, return true 就会输出结果 1
        if ((sum += v) >= s) { //如果 sum 足够大了就可以搜集结果
            while (sum - nums[start] >= s) sum -= nums[start++]; //尝试缩短结果
            result = Math.min(result, i - start + 1); //把较小的结果留下
        }
    }) ? 1 : result === nums.length + 1 ? 0 : result; //提前结果，则为1, resule没有被更新，则为0
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), 2, "case 1");
assert.deepEqual(minSubArrayLen(7, [6, 3, 1, 2, 4, 3]), 2, "case 1");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");